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
touchLeft.onConnected = function() {
    touchLeft.calibrate()
}
touchRight.onConnected = function() {
    touchLeft.calibrate()
}


forever(() => {
   lights.move(LightMove.Rotate);
   lights2.move(LightMove.Rotate);
});

enum State { Green, Sparkle, Idle}
let state = State.Idle;

// events
touchLeft.onEvent(2, JDButtonEvent.Down, function () {
    // green
    if (state === State.Idle) {
        state = State.Green;
        lights.range(0, 60).setAll(0x00ff00);
        lights.startBrightnessTransition(80, 40, 1000, -1, true);
        lights2.range(0, 60).setAll(0x00ff00);
        lights2.startBrightnessTransition(80, 40, 1000, -1, true);
    }
})

// events
touchRight.onEvent(2, JDButtonEvent.Down, function () {
    // sparkle
    if (state == State.Green) {
        state = State.Sparkle;
        lights.clear();
        lights.startBrightnessTransition(0, 255, 10);
        lights2.clear();
        lights2.startBrightnessTransition(0, 255, 10);
        pause(1)

        lights.showAnimation(light.sparkleAnimation, 60000)
        lights2.showAnimation(light.sparkleAnimation, 60000)
        state = State.Idle;
    }
})
