// gevanleen

// hardware
const lights1 = light.pixels;
const lights2 = light.pixels2;
const motion = jacdac.accelerometerClient;

lights1.setLength(46);
lights1.setBrightness(0);
lights1.setAll(0xffffff);
lights2.setLength(46);
lights2.setBrightness(0);
lights2.setAll(0xffffff);

// actions
function pulse() {
    lights1.startBrightnessTransition(0, 80, 1000, 2, true,
        new light.EasingBrightnessTransition(easing.linear, easing.linear)
    );
    lights2.startBrightnessTransition(0, 80, 1000, 2, true,
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
