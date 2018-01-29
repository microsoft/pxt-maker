
namespace pxsim.visuals {
    const BANANA_XOFF = 0;
    const BANANA_YOFF = 0;
    const BANANA_WIDTH = 200;
    const BANANA_HEIGHT = 144;
    const BANANA_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="144" viewBox="0 0 52.9 38.1" id="svg8">
    <g id="layer1" transform="translate(0 -258.9)">
      <g id="g4522" transform="matrix(1.00305 0 0 1.00224 .1 5.7)" stroke="#000" stroke-width=".6">
        <path id="path4489" d="M.5 287.6c.4.6 1.1 1.7 5.5 2.3 4.4.6 12.4.6 19.5.1 7.1-.4 13.3-1.3 18-4.9a26 26 0 0 0 8.5-13.6c1-4-.4-5.6-1.4-6.3-1-.8-1.9-.7-2.2-2.2a15 15 0 0 1 .5-6c.6-1.7 1.5-2 1.8-2.7.3-.6 0-1.4-1-1.4s-2.7 1-3.4 1.8c-.8.8-.5 1.6-.4 3.2 0 1.6 0 4-1.5 7.5a17.3 17.3 0 0 1-10.3 9.9c-6 2-15 2-21 2.5-6 .6-9 2-10.7 3.6a7.7 7.7 0 0 0-2.1 4.7c-.2 1-.2 1 .2 1.5z" fill="#fff331"/>
        <path id="path4493" d="M45.9 255.5c0 .6.6 1.1 1.6 1 1-.2 2.3-1 2.9-1.8.6-.7.4-1.4-.3-1.6a4 4 0 0 0-2.8.4c-.9.5-1.4 1.3-1.4 2z" fill="#ffba31"/>
        <path id="path4497" d="M.3 287c.1.5.5.9.8 1.1.3.3.5.4.6 0 0-.4 0-1.4-.3-2-.1-.6-.4-.9-.5-1-.2-.1-.4 0-.5.4a3 3 0 0 0 0 1.5z" fill="#ffba31"/>
      </g>
    </g>
  </svg>
  `;
    export function mkTouchPart(xy: Coord = [0, 0]): SVGElAndSize {
        const [x, y] = xy;
        const l = x + BANANA_XOFF;
        const t = y + BANANA_YOFF;
        const w = BANANA_WIDTH;
        const h = BANANA_HEIGHT;
        const img = <SVGGElement>svg.elt("image");
        svg.hydrate(img, {
            class: "sim-led", x: l, y: t, width: w, height: h,
            href: svg.toDataUri(BANANA_SVG)
        });
        return { el: img, x: l, y: t, w: w, h: h };
    }
    export class TouchView implements IBoardPart<TouchButtonState> {
        public element: SVGElement;
        public defs: SVGElement[];
        private state: TouchButtonState;
        private bus: EventBus;
        private btn: SVGElement;

        private pinId: number;
        private button: CommonButton;

        public init(bus: EventBus, state: TouchButtonState, svgEl: SVGSVGElement, otherParams: Map<string>) {
            this.state = state;
            this.bus = bus;
            this.defs = [];
            this.element = this.mkBtn();
            let pinStr = pxsim.readPin(otherParams["button"]);
            this.pinId = pxsim.pinIds[pinStr];
            this.button = new CommonButton(this.pinId);
            //this.state.buttonsByPin[this.pinId] = this.button;
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

        public updateTheme() { }

        private mkBtn() {
            const e = pxsim.visuals.mkTouchPart([0, 0]);
            this.btn = e.el;
            return this.btn;
        }

        private attachEvents() {
            let btnSvgs = [this.btn];

            btnSvgs.forEach((btn, index) => {
                btn.addEventListener(pointerEvents.down, ev => {
                    this.button.setPressed(true);
                })
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