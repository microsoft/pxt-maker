// gevanleen

/*
// hardware
const lights1 = light.pixels;
const lights2 = light.pixels2;

// actions
function pulse() {
    lights1.startBrightnessTransition(0, 80, 1000, 2, true,
        new light.EasingBrightnessTransition(easing.linear, easing.linear)
    );
    lights2.startBrightnessTransition(0, 80, 1000, 2, true,
        new light.EasingBrightnessTransition(easing.linear, easing.linear)
    );
}


lights1.setLength(46);
lights1.setBrightness(0);
lights1.setAll(0xffffff);
lights2.setLength(46);
lights2.setBrightness(0);
lights2.setAll(0xffffff);
*/

const testLights = light.pixels
testLights.setLength(20);
const motionLeft = new jacdac.AccelerometerClient("step");
const motionRight = jacdac.accelerometerClient;

motionLeft.requiredDeviceName = "L"
motionRight.requiredDeviceName = "R"

motionLeft.onCustomGesture(BeadGesture.Step, function () {
    testLights.setAll(0xff0000)
})

motionRight.onCustomGesture(BeadGesture.Step, function () {
    testLights.setAll(0x0000ff)
})
