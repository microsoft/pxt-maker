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

touchLeft.onEvent(2, JDButtonEvent.Down, function () {
    lights1.setAll(0x00ff00);
    lights1.startBrightnessTransition(80, 0, 1000);
})

touchLeft.onEvent(5, JDButtonEvent.Down, function () {
    lights1.setAll(0xffff00);
    lights1.startBrightnessTransition(80, 0, 1000);
})

touchRight.onEvent(1, JDButtonEvent.Down, function () {
    lights2.setAll(0x0000ff); // pin A2 not working on R
    lights2.startBrightnessTransition(80, 0, 1000);
})

touchRight.onEvent(5, JDButtonEvent.Down, function () {
    lights2.setAll(0x00ffff);
    lights2.startBrightnessTransition(80, 0, 1000);
})
