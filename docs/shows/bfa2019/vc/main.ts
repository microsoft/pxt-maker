// Victoria

// hardware
const lights = light.pixels;
lights.setLength(40);
lights.setBrightness(255);
const lights2 = light.pixels2;
lights2.setLength(80);
lights2.setBrightness(255);
const motion = jacdac.accelerometerClient;

let pinkSparkleAnimation: light.NeoPixelAnimation = new light.SparkleAnimation(0xff, 0x33, 0x99, 50);

// actions
function pulse() {
    lights.showAnimation(pinkSparkleAnimation, 2000)
    lights2.showAnimation(pinkSparkleAnimation, 2000)
}

// events
motion.onCustomGesture(BeadGesture.Step, function () {
    pulse();
})
