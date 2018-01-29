/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts"/>
/// <reference path="../built/common-sim.d.ts"/>

namespace pxsim {
    export let pinIds: Map<number>;

    export function pinByName(name: string) {
        let v = pinIds[name]
        if (v == null) {
            v = getConfig(getConfigKey("PIN_" + name))
        }
        let p = pxtcore.getPin(v)
        U.assert(!!p, "missing pin: " + name + "(" + v + ")")
        return p
    }

    export class DalBoard extends CoreBoard implements MusicBoard, LightBoard, CapTouchBoard {
        // state & update logic for component services
        edgeConnectorState: EdgeConnectorState;
        lightSensorState: LightSensorState;
        buttonState: CommonButtonState;
        _neopixelState: pxt.Map<CommonNeoPixelState>;
        audioState: AudioState;
        neopixelPin: Pin;
        touchButtonState: TouchButtonState;

        constructor(public boardDefinition: BoardDefinition) {
            super();

            const pinList: number[] = []
            const servos: Map<number> = {}

            function pinId(name: string) {
                let key = getConfigKey("PIN_" + name)
                if (key != null)
                    return getConfig(key)
                return null
            }

            pinIds = {}

            for (let block of (boardDefinition.visual as BoardImageDefinition).pinBlocks) {
                // scan labels
                for (let lbl of block.labels) {
                    for (let sublbl of lbl.split(/[\/,]/)) {
                        sublbl = sublbl.replace(/[~\s]+/g, "")
                        let id = pinId(sublbl)
                        if (id != null) {
                            if (pinList.indexOf(id) < 0) {
                                pinList.push(id)
                                if ((DAL.PA02 <= id && id <= DAL.PA11) ||
                                    (DAL.PB00 <= id && id <= DAL.PB09))
                                    servos[sublbl] = id;
                            }
                            pinIds[lbl] = id;
                            pinIds[sublbl] = id;
                        }
                    }
                }
            }

            // also add pins that might not have visual representation
            for (let k of getAllConfigKeys()) {
                if (/^PIN_/.test(k)) {
                    let id = getConfig(getConfigKey(k))
                    if (id != null) {
                        if (pinList.indexOf(id) < 0)
                            pinList.push(id);
                        pinIds[k.replace(/^PIN_/, "")] = id;
                    }
                }
            }

            this.neopixelPin = new Pin(
                getConfig(DAL.CFG_PIN_NEOPIXEL) ||
                getConfig(DAL.CFG_PIN_DOTSTAR_DATA) ||
                DAL.PA30
            );
            
            this._neopixelState = {};
            this.bus.setNotify(DAL.DEVICE_ID_NOTIFY, DAL.DEVICE_ID_NOTIFY_ONE);

            // TODO we need this.buttonState set for pxtcore.getButtonByPin(), but
            // this should be probably merged with buttonpair somehow
            this.builtinParts["pinbuttons"] = this.builtinParts["buttons"]
                = this.buttonState = new CommonButtonState();
            this.builtinParts["touch"] = this.touchButtonState = new TouchButtonState(pinList);
            
            // components
            this.builtinParts["slideswitch"] = (pin: Pin) => new ToggleState(pin);

            this.builtinParts["neopixel"] = (pin: Pin) => { return this.neopixelState(pin.id); } //this.neopixelState(this.neopixelPin.id);
            this.builtinParts["audio"] = this.audioState = new AudioState();
            this.builtinParts["edgeconnector"] = this.edgeConnectorState = new EdgeConnectorState({
                pins: pinList,
                servos
            });
            this.builtinParts["microservo"] = this.edgeConnectorState;

            this.builtinVisuals["buttons"] = () => new visuals.ButtonView();
            this.builtinVisuals["touch"] = () => new visuals.TouchView();
            this.builtinVisuals["microservo"] = () => new visuals.MicroServoView();
            this.builtinVisuals["neopixel"] = () => new visuals.NeoPixelView();

            this.builtinPartVisuals["buttons"] = (xy: visuals.Coord) => visuals.mkBtnSvg(xy);

            this.builtinPartVisuals["microservo"] = (xy: visuals.Coord) => visuals.mkMicroServoPart(xy);
            this.builtinPartVisuals["neopixel"] = (xy: visuals.Coord) => visuals.mkNeoPixelPart(xy);

            this.builtinParts["slideswitch"] = (pin: Pin) => new ToggleState(pin);
            this.builtinVisuals["slideswitch"] = () => new visuals.ToggleComponentVisual(parsePinString);
            this.builtinPartVisuals["slideswitch"] = (xy: visuals.Coord) => visuals.mkSideSwitchPart(xy);

            this.builtinParts["led"] = (pin: Pin) => new ToggleState(pin);
            this.builtinVisuals["led"] = () => new visuals.LedView(parsePinString);
            this.builtinPartVisuals["led"] = (xy: visuals.Coord) => visuals.mkLedPart(xy);
        }

        receiveMessage(msg: SimulatorMessage) {
            if (!runtime || runtime.dead) return;

            switch (msg.type || "") {
                case "eventbus":
                    let ev = <SimulatorEventBusMessage>msg;
                    this.bus.queue(ev.id, ev.eventid, ev.value);
                    break;
                case "serial":
                    let data = (<SimulatorSerialMessage>msg).data || "";
                    // TODO
                    break;
                case "radiopacket":
                    let packet = <SimulatorRadioPacketMessage>msg;
                    //this.radioState.recievePacket(packet);
                    break;
            }
        }

        kill() {
            super.kill();
            AudioContextManager.stop();
        }

        initAsync(msg: SimulatorRunMessage): Promise<void> {
            super.initAsync(msg);

            const options = (msg.options || {}) as pxt.RuntimeOptions;

            const boardDef = msg.boardDefinition;
            const cmpsList = msg.parts;
            cmpsList.sort();
            const cmpDefs = msg.partDefinitions || {};
            const fnArgs = msg.fnArgs;

            const opts: visuals.BoardHostOpts = {
                state: this,
                boardDef: boardDef,
                partsList: cmpsList,
                partDefs: cmpDefs,
                fnArgs: fnArgs,
                maxWidth: "100%",
                maxHeight: "100%",
            };
            const viewHost = new visuals.BoardHost(pxsim.visuals.mkBoardView({
                visual: boardDef.visual
            }), opts);

            document.body.innerHTML = ""; // clear children
            document.body.appendChild(viewHost.getView());

            return Promise.resolve();
        }

        getDefaultPitchPin() {
            // amp always on PA02, regardless which name is has
            return pxtcore.getPin(DAL.PA02);
        }

        defaultNeopixelPin() {
            return this.neopixelPin;
        }

        tryGetNeopixelState(pinId: number): CommonNeoPixelState {
            return this._neopixelState[pinId];
        }

        neopixelState(pinId: number): CommonNeoPixelState {
            let state = this._neopixelState[pinId];
            if (!state) state = this._neopixelState[pinId] = new CommonNeoPixelState();
            return state;
        }
    }

    export function initRuntimeWithDalBoard(msg: SimulatorRunMessage) {
        U.assert(!runtime.board);
        let b = new DalBoard(msg.boardDefinition);
        runtime.board = b;
        runtime.postError = (e) => {
            // TODO
            runtime.updateDisplay();
        }
    }

    if (!pxsim.initCurrentRuntime) {
        pxsim.initCurrentRuntime = initRuntimeWithDalBoard;
    }

    export function parsePinString(pinString: string): Pin {
        const pinName = pxsim.readPin(pinString);
        return pinName ? pxtcore.getPin(pinIds[pinName]) : undefined;
    }
}