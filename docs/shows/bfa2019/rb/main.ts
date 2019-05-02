// Rebecca

// hardware
const tattoo = jacdac.touchButtonsClient;
const lights = light.pixels;
lights.setBrightness(200);
lights.setLength(50);

// actions
let dripping = false;
let countdown = 0;
function drip() {
    if (!dripping) {
        countdown = 0;
        lights.clear()
        dripping = true;
        for (let i = 0; i < 100; ++i) {
            if (countdown == 0) {
                lights.setPixelColor(0, Colors.White);
                countdown = Math.randomRange(1,10);
            } else 
                countdown--;
            lights.move(LightMove.Shift, 1);
            pause(100);
        }
        dripping = false
    }
}

// events
tattoo.onEvent(2, JDButtonEvent.Down, function () {
    drip();
})