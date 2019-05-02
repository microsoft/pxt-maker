// Q

// hardware
const lights = light.pixels;
lights.setBrightness(0);
lights.setAll(0xff0000);
const promixity = jacdac.proximityClient;
const motion = jacdac.accelerometerClient;

// actions
function pulse() {
    lights.startBrightnessTransition(0, 200, 2000, 2, true,
        new light.EasingBrightnessTransition(easing.linear, easing.linear)
    );
}

// events
promixity.onEvent(JDPromixityEvent.Close, function () {
    pulse();
})
motion.onCustomGesture(BeadGesture.Step, function () {
    pulse();
})
