// Victoria

// wants pink lights

// hardware
const lights = light.pixels;
lights.setLength(100);
lights.setBrightness(255);
lights.setColor(0xff3399);
const motion = jacdac.accelerometerClient;

// actions
function pulse() {
    lights.showAnimation(light.sparkleAnimation, 2000)
}

// events
motion.onCustomGesture(BeadGesture.Step, function () {
    pulse();
})
