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
touchLeft.onConnected = function () {
    touchLeft.calibrate()
}
touchRight.onConnected = function () {
    touchRight.calibrate()
}
const rainbowAnimation: light.NeoPixelAnimation = new light.RainbowCycleAnimation(50)
const runningAnimation: light.NeoPixelAnimation = new light.RunningLightsAnimation(0xFF, 0, 0, 50)

let running = false
function anim() {
    if (running) return;
    running = true;
    control.runInBackground(() => {
        while (running) {
            lights1.startBrightnessTransition(0, 80, 500);
            lights1.showAnimation(light.cometAnimation, 5000);
        }
    });
    control.runInBackground(() => {
        while (running) {
            lights2.startBrightnessTransition(0, 80, 500);
            lights2.showAnimation(light.cometAnimation, 5000);
        }
    });
}

touchLeft.onEvent(2, JDButtonEvent.Down, function () {
    anim();
})

touchRight.onEvent(1, JDButtonEvent.Down, function () {
    anim();
})

touchLeft.onEvent(5, JDButtonEvent.Down, function () {
    if (running) return;
    lights1.setAll(0xffff00);
    lights1.startBrightnessTransition(80, 0, 1000);
})

touchRight.onEvent(5, JDButtonEvent.Down, function () {
    if (running) return;
    lights2.setAll(0x00ffff);
    lights2.startBrightnessTransition(80, 0, 1000);
})
