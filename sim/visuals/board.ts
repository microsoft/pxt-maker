namespace pxsim.visuals {
    const svg = pxsim.svg;

    export const VIEW_WIDTH = 372.3404255319149;
    export const VIEW_HEIGHT = 361.70212765957444;
    const TOP_MARGIN = 20;
    const MID_MARGIN = 40;
    const BOT_MARGIN = 20;
    const PIN_LBL_SIZE = PIN_DIST * 0.7;
    const PIN_LBL_HOVER_SIZE = PIN_LBL_SIZE * 1.5;
    const SQUARE_PIN_WIDTH = PIN_DIST * 0.66666;
    const SQUARE_PIN_HOVER_WIDTH = PIN_DIST * 0.66666 + PIN_DIST / 3.0;

    const STYLE = `
.sim-board-pin {
    stroke: #404040;
    fill: #000000;
}
.sim-board-button {
    stroke: #aaa;
    stroke-width: 3px;
    fill: #666;
}
.sim-board-button.pressed {
    fill: #ee0;
}
.sim-board-button:hover {
    stroke-width: 4px;
    stroke: #ee0;
    cursor: pointer;
}
    `

    export interface IBoardTheme {
        accent?: string;
        display?: string;
        pin?: string;
        pinTouched?: string;
        pinActive?: string;
        ledOn?: string;
        ledOff?: string;
        buttonOuter?: string;
        buttonUps: string[];
        buttonDown?: string;
        virtualButtonOuter?: string;
        virtualButtonUp?: string;
        virtualButtonDown?: string;
        lightLevelOn?: string;
        lightLevelOff?: string;
        soundLevelOn?: string;
        soundLevelOff?: string;
    }

    export var themes: IBoardTheme[] = ["#3ADCFE"].map(accent => {
        return {
            accent: accent,
            pin: "#D4AF37",
            pinTouched: "#FFA500",
            pinActive: "#FF5500",
            ledOn: "#ff7777",
            ledOff: "#fff",
            buttonOuter: "#979797",
            buttonUps: ["#000", "#000", "#000"],
            buttonDown: "#FFA500",
            virtualButtonDown: "#FFA500",
            virtualButtonOuter: "#333",
            virtualButtonUp: "#fff",
            lightLevelOn: "yellow",
            lightLevelOff: "#555",
            soundLevelOn: "#7f8c8d",
            soundLevelOff: "#555",
        }
    });

    export function randomTheme(): IBoardTheme {
        return themes[Math.floor(Math.random() * themes.length)];
    }

    export type ComputedBoardDimensions = {
        scaleFn: (n: number) => number,
        height: number,
        width: number,
        xOff: number,
        yOff: number
    };

    export function getBoardDimensions(vis: BoardImageDefinition): ComputedBoardDimensions {
        let scaleFn = (n: number) => n * (PIN_DIST / vis.pinDist);
        let width = scaleFn(vis.width);
        return {
            scaleFn: scaleFn,
            height: scaleFn(vis.height),
            width: width,
            xOff: (VIEW_WIDTH - width) / 2.0,
            yOff: TOP_MARGIN
        }
    }

    export interface MetroBoardProps extends GenericBoardProps {
        runtime?: pxsim.Runtime;
        theme?: IBoardTheme;
        disableTilt?: boolean;
    }

    export class MetroBoardSvg extends GenericBoardSvg {

        public board: pxsim.DalBoard;
        private onBoardLeds: BoardLed[];
        private onBoardNeopixels: BoardNeopixel[];
        private onBoardReset: BoardResetButton;
        private onBoardButtons: BoardButton[];
        private onBoardTouchPads: BoardTouchButton[];

        constructor(public props: MetroBoardProps) {
            super(props);

            const el = this.getView().el;
            this.addDefs(el);

            this.onBoardLeds = []
            this.onBoardNeopixels = [];
            this.onBoardTouchPads = [];
            this.onBoardButtons = [];

            // neopixels/leds
            for (const l of props.visualDef.leds || []) {
                if (l.color == "neopixel") {
                    const onBoardNeopixel = new BoardNeopixel(l.label, l.x, l.y, l.w || 0);
                    this.onBoardNeopixels.push(onBoardNeopixel);
                    el.appendChild(onBoardNeopixel.element);
                } else {
                    const pin = pinByName(l.label);
                    if (pin) {
                        let bl = new BoardLed(l.x, l.y, l.color, pinByName(l.label),
                            l.w || 9, l.h || 8)
                        this.onBoardLeds.push(bl)
                        el.appendChild(bl.element)
                    }
                }
            }
            this.onBoardNeopixels.sort((l, r) => {
                const li = parseInt(l.name.replace(/^[^\d]*/, '')) || 0;
                const ri = parseInt(r.name.replace(/^[^\d]*/, '')) || 0;
                return li < ri ? -1 : li > ri ? 1 : 0;
            })

            // reset button
            if (props.visualDef.reset) {
                this.onBoardReset = new BoardResetButton(props.visualDef.reset)
                el.appendChild(this.onBoardReset.element)
            }

            // touch pads
            for (const l of props.visualDef.touchPads || []) {
                const pin = pxsim.pinIds[l.label];
                if (!pin) {
                    console.error(`touch pin ${pin} not found`)
                    continue;
                }
                const tp = new BoardTouchButton(l, pin);
                this.onBoardTouchPads.push(tp);
                el.appendChild(tp.element);
            }

            // regular buttons
            for (const l of props.visualDef.buttons || []) {
                const tp = new BoardButton(l);
                this.onBoardButtons.push(tp);
                el.appendChild(tp.element);
            }

            if (props && props.theme)
                this.updateTheme();

            if (props && props.runtime) {
                this.board = this.props.runtime.board as pxsim.DalBoard;
                this.board.updateSubscribers.push(() => this.updateState());
                this.updateState();
            }


        }

        public updateTheme() {
        }

        public updateState() {
            this.onBoardLeds.forEach(l => l.updateState());
            if (this.board.neopixelPin) {
                const state = this.board.neopixelState(this.board.neopixelPin.id);
                if (state.buffer) {
                    for (let i = 0; i < this.onBoardNeopixels.length; ++i) {
                        const rgb = state.pixelColor(i)
                        if (rgb !== null)
                            this.onBoardNeopixels[i].setColor(rgb as any);
                    }
                }
            }
        }

        private addDefs(el: SVGElement) {
            const defs = svg.child(el, "defs", {});

            let neopixelglow = svg.child(defs, "filter", { id: "neopixelglow", x: "-200%", y: "-200%", width: "400%", height: "400%" });
            svg.child(neopixelglow, "feGaussianBlur", { stdDeviation: "4.3", result: "coloredBlur" });
            let neopixelmerge = svg.child(neopixelglow, "feMerge", {});
            svg.child(neopixelmerge, "feMergeNode", { in: "coloredBlur" })
            svg.child(neopixelmerge, "feMergeNode", { in: "SourceGraphic" })

            const style = svg.child(el, "style", {});
            style.textContent = STYLE;
        }
    }

    class BoardResetButton {
        element: SVGElement;
        constructor(p: BoxDefinition) {
            p.w = p.w || 15;
            p.h = p.h || 15;
            this.element = svg.elt("circle", {
                cx: p.x + p.w / 2,
                cy: p.y + p.h / 2,
                r: Math.max(p.w, p.h) / 2,
                class: "sim-board-button"
            }) as SVGCircleElement
            svg.title(this.element, "RESET");
            // hooking up events
            pointerEvents.down.forEach(evid => this.element.addEventListener(evid, ev => {
                pxsim.U.addClass(this.element, "pressed");
                pxsim.Runtime.postMessage(<pxsim.SimulatorCommandMessage>{
                    type: "simulator",
                    command: "restart"
                })
            }));
            this.element.addEventListener(pointerEvents.leave, ev => {
                pxsim.U.removeClass(this.element, "pressed");
            })
            this.element.addEventListener(pointerEvents.up, ev => {
                pxsim.U.removeClass(this.element, "pressed");
            })
        }
    }

    class BoardLed {
        private colorOff = "#aaa"
        private backElement: SVGElement;
        private ledElement: SVGElement;
        element: SVGElement;

        constructor(x: number, y: number, private colorOn: string, private pin: Pin, w: number, h: number) {
            this.backElement = svg.elt("rect", { x, y, width: w, height: h, fill: this.colorOff });
            this.ledElement = svg.elt("rect", { x, y, width: w, height: h, fill: this.colorOn, opacity: 0 });
            svg.filter(this.ledElement, `url(#neopixelglow)`);
            this.element = svg.elt("g", { class: "sim-led" });
            this.element.appendChild(this.backElement);
            this.element.appendChild(this.ledElement);
        }

        updateTheme(colorOff: string, colorOn: string) {
            if (colorOff) {
                this.colorOff = colorOff;
            }
            if (colorOn) {
                this.colorOn = colorOn;
            }
        }

        updateState() {
            const opacity = this.pin.mode & PinFlags.Digital ? (this.pin.value > 0 ? 1 : 0)
                : 0.1 + Math.max(0, Math.min(1023, this.pin.value)) / 1023 * 0.8;
            this.ledElement.setAttribute("opacity", opacity.toString())
        }
    }

    class BoardNeopixel {
        name: string;
        element: SVGCircleElement;

        constructor(name: string, x: number, y: number, r: number) {
            this.name = name;
            this.element = svg.elt("circle", { cx: x + r / 2, cy: y + r / 2, r: 10 }) as SVGCircleElement
            svg.title(this.element, name);
        }

        setColor(rgb: [number, number, number]) {
            const hsl = visuals.rgbToHsl(rgb);
            let [h, s, l] = hsl;
            const lx = Math.max(l * 1.3, 85);

            // at least 10% luminosity
            l = l * 90 / 100 + 10;
            this.element.style.stroke = `hsl(${h}, ${s}%, ${Math.min(l * 3, 75)}%)`
            this.element.style.strokeWidth = "1.5";
            svg.fill(this.element, `hsl(${h}, ${s}%, ${lx}%)`);
            svg.filter(this.element, `url(#neopixelglow)`);
        }
    }

    class BoardButton {
        element: SVGElement;
        def: ButtonDefinition;
        button: CommonButton;
        constructor(def: ButtonDefinition) {
            this.def = def;
            def.w = def.w || 15;
            def.h = def.h || 15;
            this.element = svg.elt("circle", {
                cx: def.x + def.w / 2,
                cy: def.y + def.h / 2,
                r: Math.max(def.w, def.h) / 2,
                class: "sim-board-button"
            }) as SVGCircleElement
            svg.title(this.element, def.label);
            // resolve button
            this.button = def.index !== undefined
                ? pxsim.pxtcore.getButton(def.index)
                : pxsim.pxtcore.getButtonByPin(pxsim.pinIds[def.label]);
            // hooking up events
            pointerEvents.down.forEach(evid => this.element.addEventListener(evid, ev => {
                this.button.setPressed(true);
                pxsim.U.addClass(this.element, "pressed");
            }));
            this.element.addEventListener(pointerEvents.leave, ev => {
                pxsim.U.removeClass(this.element, "pressed");
                this.button.setPressed(false);
            })
            this.element.addEventListener(pointerEvents.up, ev => {
                pxsim.U.removeClass(this.element, "pressed");
                this.button.setPressed(false);
            })
        }
    }

    class BoardTouchButton {
        element: SVGElement;
        def: TouchPadDefinition;
        button: TouchButton;
        constructor(def: TouchPadDefinition, pinId: number) {
            this.def = def;
            def.w = def.w || 15;
            def.h = def.h || 15;
            this.element = svg.elt("circle", {
                cx: def.x + def.w / 2,
                cy: def.y + def.h / 2,
                r: Math.max(def.w, def.h) / 2,
                class: "sim-board-button"
            }) as SVGCircleElement
            svg.title(this.element, def.label);
            // resolve button
            this.button = pxsim.pxtcore.getTouchButton(pinId);
            // hooking up events
            pointerEvents.down.forEach(evid => this.element.addEventListener(evid, ev => {
                this.button.setPressed(true);
                pxsim.U.addClass(this.element, "pressed");
            }));
            this.element.addEventListener(pointerEvents.leave, ev => {
                pxsim.U.removeClass(this.element, "pressed");
                this.button.setPressed(false);
            })
            this.element.addEventListener(pointerEvents.up, ev => {
                pxsim.U.removeClass(this.element, "pressed");
                this.button.setPressed(false);
            })
        }
    }
}