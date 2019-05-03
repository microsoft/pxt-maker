
// hardware
const lights = light.pixels;
lights.setAll(0xf0000);
lights.setLength(288)
lights.startBrightnessTransition(96, 0, 1000)
const sparkle = new light.SparkleAnimation(0xff, 0, 0, 20);

const lights2 = light.pixels2;
lights2.setLength(120)
lights2.setBrightness(25);
lights2.setAll(0xf0000);
lights2.startBrightnessTransition(96, 0, 1000)
    
const proxmity = jacdac.proximityClient;

let started = false;
jacdac.proximityClient.onEvent(JDPromixityEvent.Close, function () {
    if (started) return;

    started = true;
    lights2.startBrightnessTransition(200, 0, 1000, -1, false,
        new light.EasingBrightnessTransition(easing.outCubic)
    );
    lights.setBrightness(255);
    forever(function () {
        lights.showAnimation(sparkle, 500);
    })
});