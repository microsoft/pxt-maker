// Rebecca

// hardware
const tattoo = jacdac.touchButtonsClient;
const lights = light.pixels;
lights.setBrightness(200);

// actions
let dripping = false;
function drip() {
    if (!dripping) {
        dripping = true;
        for (let i = 0; i < 30; ++i) {
            if (i % 3)
                lights.setPixelColor(0, Colors.White);
            lights.move(LightMove.Rotate, 1);
            pause(100);
        }
        dripping = false
    }
}

// events
tattoo.onEvent(0, JDButtonEvent.Down, function () {
    drip();
})