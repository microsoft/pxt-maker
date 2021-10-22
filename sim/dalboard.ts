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
        if (!p)
            console.error("missing pin: " + name + "(" + v + ")")
        return p
    }

    export class DalBoard extends CoreBoard
        implements MusicBoard,
        LightBoard,
        CapTouchBoard,
        AccelerometerBoard,
        StorageBoard,
        LightSensorBoard,
        TemperatureBoard,
        MicrophoneBoard,
        ScreenBoard,
        InfraredBoard,
        LCDBoard,
        RadioBoard,
        ControlMessageBoard {
        // state & update logic for component services
        viewHost: visuals.BoardHost;
        view: SVGElement;
        edgeConnectorState: EdgeConnectorState;
        lightSensorState: AnalogSensorState;
        buttonState: CommonButtonState;
        lightState: pxt.Map<CommonNeoPixelState>;
        audioState: AudioState;
        neopixelPin: Pin;
        touchButtonState: TouchButtonState;
        accelerometerState: AccelerometerState;
        storageState: StorageState;
        thermometerState: AnalogSensorState;
        thermometerUnitState: TemperatureUnit;
        microphoneState: AnalogSensorState;
        screenState: ScreenState;
        irState: InfraredState;
        lcdState: LCDState;
        radioState: RadioState;
        controlMessageState: ControlMessageState;

        constructor(public boardDefinition: BoardDefinition) {
            super();

            const pinList: number[] = []
            const servos: Map<number> = {}

            function pinId(name: string) {
                let key = getConfigKey("PIN_" + name)
                if (key != null)
                    return getConfig(key)
                // this is for P03 format used by NRF - these are direct names of CPU pins
                let m = /^P(\d+)$/.exec(name)
                if (m)
                    return parseInt(m[1])
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

            this.lightState = {};
            this.microphoneState = new AnalogSensorState(DAL.DEVICE_ID_MICROPHONE, 52, 120, 75, 96);
            this.storageState = new StorageState();
            this.lightSensorState = new AnalogSensorState(DAL.DEVICE_ID_LIGHT_SENSOR, 0, 255, 128 / 4, 896 / 4);
            this.thermometerState = new AnalogSensorState(DAL.DEVICE_ID_THERMOMETER, -20, 50, 10, 30);
            this.thermometerUnitState = TemperatureUnit.Celsius;
            this.irState = new InfraredState(this);
            this.lcdState = new LCDState();
            this.controlMessageState = new ControlMessageState(this);
            this.bus.setNotify(DAL.DEVICE_ID_NOTIFY, DAL.DEVICE_ID_NOTIFY_ONE);

            // TODO we need this.buttonState set for pxtcore.getButtonByPin(), but
            // this should be probably merged with buttonpair somehow
            this.builtinParts["radio"] = this.radioState = new RadioState(runtime, this, {
                ID_RADIO: DAL.DEVICE_ID_RADIO,
                RADIO_EVT_DATAGRAM: 1 /*DAL.DEVICE_RADIO_EVT_DATAGRAM*/
            });
            this.builtinParts["pinbuttons"] = this.builtinParts["buttons"]
                = this.buttonState = new CommonButtonState();
            this.builtinParts["touch"] = this.touchButtonState = new TouchButtonState(pinList);

            // components
            this.builtinParts["audio"] = this.audioState = new AudioState();
            this.builtinParts["edgeconnector"] = this.edgeConnectorState = new EdgeConnectorState({
                pins: pinList,
                servos
            });
            this.builtinParts["microservo"] = this.edgeConnectorState;
            this.builtinParts["accelerometer"] = this.accelerometerState = new AccelerometerState(runtime);;
            this.builtinParts["screen"] = this.screenState = new ScreenState([], getConfig(DAL.CFG_DISPLAY_WIDTH) || 160, getConfig(DAL.CFG_DISPLAY_HEIGHT) || 128);

            this.builtinVisuals["buttons"] = () => new visuals.ButtonView();
            this.builtinVisuals["microservo"] = () => new visuals.MicroServoView();

            this.builtinParts["neopixel"] = (pin: Pin) => { return this.neopixelState(pin.id); };
            this.builtinVisuals["neopixel"] = () => new visuals.NeoPixelView(parsePinString);
            this.builtinPartVisuals["neopixel"] = (xy: visuals.Coord) => visuals.mkNeoPixelPart(xy);

            this.builtinParts["dotstar"] = (pin: Pin) => { return this.neopixelState(pin.id); };
            this.builtinVisuals["dotstar"] = () => new visuals.NeoPixelView(parsePinString);
            this.builtinPartVisuals["dotstar"] = (xy: visuals.Coord) => visuals.mkNeoPixelPart(xy);

            this.builtinParts["lcd"] = this.lcdState;
            this.builtinVisuals["lcd"] = () => new visuals.LCDView();
            this.builtinPartVisuals["lcd"] = (xy: visuals.Coord) => visuals.mkLCDPart(xy);

            this.builtinPartVisuals["buttons"] = (xy: visuals.Coord) => visuals.mkBtnSvg(xy);

            this.builtinPartVisuals["microservo"] = (xy: visuals.Coord) => visuals.mkMicroServoPart(xy);

            this.builtinParts["slideswitch"] = (pin: Pin) => new ToggleState(pin);
            this.builtinVisuals["slideswitch"] = () => new visuals.ToggleComponentVisual(parsePinString);
            this.builtinPartVisuals["slideswitch"] = (xy: visuals.Coord) => visuals.mkSideSwitchPart(xy);

            this.builtinParts["led"] = (pin: Pin) => new ToggleState(pin);
            this.builtinVisuals["led"] = () => new visuals.LedView(parsePinString);
            this.builtinPartVisuals["led"] = (xy: visuals.Coord) => visuals.mkLedPart(xy);

            this.builtinVisuals["photocell"] = () => new visuals.PhotoCellView(parsePinString);
            this.builtinPartVisuals["photocell"] = (xy: visuals.Coord) => visuals.mkPhotoCellPart(xy);

            this.builtinVisuals["screen"] = () => new visuals.ScreenView();
            this.builtinPartVisuals["screen"] = (xy: visuals.Coord) => visuals.mkScreenPart(xy);

            this.neopixelPin = this.edgeConnectorState.getPin(getConfig(DAL.CFG_PIN_ONBOARD_DOTSTAR_DATA))
                || this.edgeConnectorState.getPin(getConfig(DAL.CFG_PIN_ONBOARD_NEOPIXEL))
                || this.edgeConnectorState.getPin(getConfig(DAL.CFG_PIN_DOTSTAR_DATA))
                || this.edgeConnectorState.getPin(getConfig(DAL.CFG_PIN_NEOPIXEL));

            if (!this.neopixelPin && (boardDefinition.visual as BoardImageDefinition)?.leds?.some(l => l.color == "neopixel"))
                this.neopixelPin = this.edgeConnectorState.getPin(getConfig(DAL.CFG_PIN_LED_B))

            this.builtinParts["pixels"] = (pin: Pin) => { return this.neopixelState(!!this.neopixelPin && this.neopixelPin.id); };
            this.builtinVisuals["pixels"] = () => new visuals.NeoPixelView(parsePinString);
            this.builtinPartVisuals["pixels"] = (xy: visuals.Coord) => visuals.mkNeoPixelPart(xy);
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
            this.viewHost = new visuals.BoardHost(pxsim.visuals.mkBoardView({
                visual: boardDef.visual,
                boardDef
            }), opts);

            document.body.innerHTML = ""; // clear children
            document.body.appendChild(this.view = this.viewHost.getView());

            this.accelerometerState.attachEvents(this.view);

            return Promise.resolve();
        }

        screenshotAsync(width?: number): Promise<ImageData> {
            return this.viewHost.screenshotAsync(width);
        }

        accelerometer(): Accelerometer {
            return this.accelerometerState.accelerometer;
        }

        getDefaultPitchPin() {
            // amp always on PA02, regardless which name is has
            return pxtcore.getPin(DAL.PA02);
        }

        tryGetNeopixelState(pinId: number): CommonNeoPixelState {
            return this.lightState[pinId];
        }

        neopixelState(pinId: number): CommonNeoPixelState {
            if (pinId === undefined) {
                pinId = pxtcore.getConfig(DAL.CFG_PIN_MOSI, -1);
            }
            let state = this.lightState[pinId];
            if (!state) state = this.lightState[pinId] = new CommonNeoPixelState();
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
        const pinName = pinString && pxsim.readPin(pinString);
        return pinName && pxtcore.getPin(pinIds[pinName]);
    }

    export namespace jacdac {
        export function _setLedChannel(ch: number, val: number) {
            const b = board() as DalBoard
            if (b.neopixelPin) {
                const state = b.neopixelState(b.neopixelPin.id);
                state.mode = NeoPixelMode.RGB_RGB;
                if (!state.buffer)
                    state.buffer = new Uint8Array(3);
                if (val > 0xffff) val = 0xffff;
                if (val < 0) val = 0;
                state.buffer[ch] = val >> 8;
                runtime.updateDisplay();
            }
        }
    }
}