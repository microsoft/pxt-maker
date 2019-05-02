// gevanleen

// hardware
const lights1 = light.pixels;
const lights2 = light.pixels2;
const lights3 = light.pixels3;
const motion = jacdac.accelerometerClient;

light.setLength(100);
lights1.setBrightness(0);
lights1.setAll(0xff0000);

// actions
function pulse() {
    lights1.startBrightnessTransition(0, 200, 1000, 2, true,
        new light.EasingBrightnessTransition(easing.linear, easing.linear)
    );
}

input.onGesture(Gesture.Shake, function () {
    pulse();
})

// events
//motion.onCustomGesture(BeadGesture.Step, function () {
//    pulse();
//})
