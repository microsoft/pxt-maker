// Doris

// hardware
const lights1 = light.pixels;
const lights2 = light.pixels2;

// TODO: length
lights1.setLength(46);
lights1.setBrightness(0);
lights2.setLength(46);
lights2.setBrightness(0);

const touchLeft = new jacdac.TouchButtonsClient("touch");
const touchRight = jacdac.touchButtonsClient;
touchLeft.requiredDeviceName = "L"
touchRight.requiredDeviceName = "R"
touchLeft.onConnected = function() {
    touchLeft.calibrate()
}
touchRight.onConnected = function() {
    touchRight.calibrate()
}
const rainbowAnimation: light.NeoPixelAnimation = new light.RainbowCycleAnimation(50)
const runningAnimation: light.NeoPixelAnimation = new light.RunningLightsAnimation(0xFF,0,0,50)

touchLeft.onEvent(2, JDButtonEvent.Down, function () {
    lights1.showAnimation(light.rainbowAnimation, 3000);
    lights2.showAnimation(rainbowAnimation, 3000);
})

touchRight.onEvent(1, JDButtonEvent.Down, function () {
    lights1.showAnimation(light.runningLightsAnimation, 3000);
    lights2.showAnimation(runningAnimation, 3000);
})

touchLeft.onEvent(5, JDButtonEvent.Down, function () {
    lights1.setAll(0xffff00);
    lights1.startBrightnessTransition(80, 0, 1000);
})

touchRight.onEvent(5, JDButtonEvent.Down, function () {
    lights2.setAll(0x00ffff);
    lights2.startBrightnessTransition(80, 0, 1000);
})
