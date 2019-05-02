// gevanleen

// hardware
const lights1 = light.pixels;
const lights2 = light.pixels2;
const lights3 = light.pixels3;
const motion = jacdac.accelerometerClient;

// actions
function pulse() {
    // TODO
}

// events
motion.onCustomGesture(BeadGesture.Step, function () {
    pulse();
})
