// UP

// hardware
const touchLeft = new jacdac.TouchButtonsClient("touch");
const touchRight = jacdac.touchButtonsClient;
const lights = light.pixels;
const lights2 = light.pixels2;
lights.setBrightness(200);
lights.setLength(120);
lights2.setBrightness(200);
lights2.setLength(120);
touchLeft.requiredDeviceName = "L"
touchRight.requiredDeviceName = "R"
touchLeft.onConnected = function () {
    touchLeft.calibrate()
}
touchRight.onConnected = function () {
    touchRight.calibrate()
}
let sparkle2 = new light.SparkleAnimation(0xff, 0xff, 0xff, 50);


forever(() => {
    lights.move(LightMove.Rotate);
    lights2.move(LightMove.Rotate);
});

pulse();

enum State { Green, Sparkle, Idle }
let state = State.Idle;


function pulse() {
    state = State.Green;
    lights.range(0, 60).setAll(0x00ff00);
    lights.startBrightnessTransition(80, 40, 1000, -1, true);
    lights2.range(0, 60).setAll(0x00ff00);
    lights2.startBrightnessTransition(80, 40, 1000, -1, true);
}
/*
// events
touchLeft.onEvent(2, JDButtonEvent.Down, function () {
    pulse();
    // green
    lights.range(0, 60).setAll(0x00ff00);
    lights.startBrightnessTransition(80, 40, 1000, -1, true);
    lights2.range(0, 60).setAll(0x00ff00);
    lights2.startBrightnessTransition(80, 40, 1000, -1, true);
})

// events
touchRight.onEvent(2, JDButtonEvent.Down, function () {
    pulse();
})


input.onGesture(Gesture.Shake, pulse);

*/