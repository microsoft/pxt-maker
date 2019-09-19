/// <reference path="../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../libs/core/dal.d.ts"/>

namespace pxsim.visuals {
    export class ButtonView implements IBoardPart<CommonButtonState> {
        public element: SVGElement;
        public defs: SVGElement[];
        public style = BUTTON_PAIR_STYLE;
        private state: CommonButtonState;
        private bus: EventBus;
        private btn: SVGGElement;

        private pinId: number;
        private button: CommonButton;

        public init(bus: EventBus, state: CommonButtonState, svgEl: SVGSVGElement, otherParams: Map<string>) {
            this.state = state;
            this.bus = bus;
            this.defs = [];
            this.element = this.mkBtn();
            let pinStr = pxsim.readPin(otherParams["button"]);
            this.pinId = pxsim.pinIds[pinStr];
            this.button = new CommonButton(this.pinId);
            this.state.buttonsByPin[this.pinId] = this.button;
            this.updateState();
            this.attachEvents();
        }

        public moveToCoord(xy: Coord) {
            let btnWidth = PIN_DIST * 3;
            let [x, y] = xy;
            translateEl(this.btn, [x, y])
        }

        public updateState() {

        }

        public updateTheme() {}

        private mkBtn() {
            this.btn = mkBtnSvg([0, 0]).el;

            const mkVirtualBtn = () => {
                const numPins = 2;
                const w = PIN_DIST * 2.8;
                const offset = (w - (numPins * PIN_DIST)) / 2;
                const corner = PIN_DIST / 2;
                const cx = 0 - offset + w / 2;
                const cy = cx;
                const txtSize = PIN_DIST * 1.3;
                const x = -offset;
                const y = -offset;
                const txtXOff = PIN_DIST / 7;
                const txtYOff = PIN_DIST / 10;

                let btng = <SVGGElement>svg.elt("g");
                let btn = svg.child(btng, "rect", { class: "sim-button-virtual", x: x, y: y, rx: corner, ry: corner, width: w, height: w});
                let btnTxt = mkTxt(cx + txtXOff, cy + txtYOff, txtSize, 0, "A+B");
                pxsim.U.addClass(btnTxt, "sim-text")
                pxsim.U.addClass(btnTxt, "sim-text-virtual");
                btng.appendChild(btnTxt);

                return btng;
            }

            let el = svg.elt("g");
            pxsim.U.addClass(el, "sim-buttonpair")
            el.appendChild(this.btn);

            return el;
        }

        private attachEvents() {
            let btnSvgs = [this.btn];

            btnSvgs.forEach((btn, index) => {
                pointerEvents.down.forEach(evid => btn.addEventListener(evid, ev => {
                    this.button.setPressed(true);
                }));
                btn.addEventListener(pointerEvents.leave, ev => {
                    this.button.setPressed(false);
                })
                btn.addEventListener(pointerEvents.up, ev => {
                    this.button.setPressed(false);
                })
            })
        }
    }
}