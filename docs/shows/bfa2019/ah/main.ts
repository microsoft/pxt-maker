// AH

// hardware
const lights1 = light.pixels;

lights1.setLength(46);
lights1.setBrightness(0);
lights1.setAll(0x00ff00);

const motion = jacdac.accelerometerClient;

motion.onCustomGesture(BeadGesture.Step, function () {
    //testLights.setAll(0xff0000)
    lights1.startBrightnessTransition(80, 0, 1000);
})

