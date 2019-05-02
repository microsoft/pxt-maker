// Jody

// hardware
const tattoo = jacdac.touchButtonsClient;
const motion = jacdac.accelerometerClient;
const lights = light.pixels;
lights.setBrightness(0);
lights.setAll(0xff0000);

// actions
let active = false;
function pulse() {
    if (active) {
        lights.startBrightnessTransition(0, 200, 1000, 2, true,
            new light.EasingBrightnessTransition(easing.linear, easing.linear)
        );
    }
}

// events
tattoo.onEvent(0, JDButtonEvent.Down, function () {
    active = true;
    lights.startBrightnessTransition(0, 64, 500, 2, true,
        new light.EasingBrightnessTransition(easing.linear, easing.linear)
    );
})
tattoo.onEvent(0, JDButtonEvent.Up, function () {
    active = false;
    lights.startBrightnessTransition(200, 0, 500, 1, false,
        new light.EasingBrightnessTransition(easing.linear, easing.linear)
    );
})
motion.onCustomGesture(BeadGesture.Step, function () {
    pulse();
})