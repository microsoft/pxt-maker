// Rebecca

// hardware
const tattoo = jacdac.touchButtonsClient;
const lights = light.pixels;
const lights2 = light.pixels2;
lights.setBrightness(200);
lights.setLength(50);
lights2.setBrightness(200);
lights2.setLength(50);
tattoo.onConnected = function() {
    tattoo.calibrate()
}

let sewed1 = [0,3,5,9,11,4,0]
let sewed2 = [0,3,5,9,11,4,0]

// actions
let dripping = false;
let countdown = 0;
let countdown2 = 0;
function drip() {
    if (!dripping) {
        countdown = 0; countdown2 = 0;
        lights.clear(); lights2.clear();
        dripping = true;
        for (let i = 0; i < 100; ++i) {
            if (countdown == 0) {
                lights.setPixelColor(0, Colors.White);
                countdown = Math.randomRange(1,10);
            } else {
                countdown--;
            }
            if (countdown2 == 0) {
                lights2.setPixelColor(0, Colors.White);
                countdown2 = Math.randomRange(1,10);
            } else { 
                countdown2--;
            }
            lights.move(LightMove.Shift, 1);
            lights2.move(LightMove.Shift, 1);
            pause(100);
        }
        lights.clear(); lights2.clear();
        dripping = false
    }
}

// events
tattoo.onEvent(2, JDButtonEvent.Down, function () {
    drip();
})