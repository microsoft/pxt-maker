// gevanleen

// hardware
const lights1 = light.pixels;
const lights2 = light.pixels2;


lights1.setLength(100);
lights1.setBrightness(0);
lights1.setAll(0xff0000);
lights2.setLength(100);
lights2.setBrightness(0);
lights2.setAll(0x00FF00);

// actions
function pulse() {
    lights1.startBrightnessTransition(80, 0, 800)
    lights2.startBrightnessTransition(80, 0, 800)
}

input.onGesture(Gesture.Shake, function () {
    pulse();
})


