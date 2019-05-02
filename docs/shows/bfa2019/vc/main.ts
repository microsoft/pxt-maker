// Victoria

// hardware
const lights = light.pixels;
lights.setBrightness(255);
const motion = jacdac.accelerometerClient;

// actions
function pulse() {
    lights.showAnimation(light.sparkleAnimation, 2000)
}

// events
motion.onCustomGesture(BeadGesture.Step, function () {
    pulse();
})
