// Q

// hardware
const lights = light.pixels;
lights.setBrightness(0);
lights.setAll(0xff00c0);
lights.setLength(30);
const promixity = jacdac.proximityClient;
const motion = jacdac.accelerometerClient;

// actions
let on = false
function pulse() {
    if (!on) {
        lights.startBrightnessTransition(0, 200, 2000, 2, true,
            new light.EasingBrightnessTransition(easing.linear, easing.linear)
        );
    } else {
        lights.clear()
    }
    on = !on;
}

// events
promixity.onEvent(JDPromixityEvent.Close, function () {
    pulse();
})

//motion.onCustomGesture(BeadGesture.Step, function () {
//    pulse();
//})
