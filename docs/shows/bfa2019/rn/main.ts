// renita

// hardware
const proximity = jacdac.proximityClient;
const top1 = light.pixels;
top1.setBrightness(0);
top1.setAll(0xff0000);
const top2 = light.pixels2;
top2.setBrightness(0);
top2.setAll(0xff0000);
const bottom = light.pixels3;
bottom.setBrightness(0);
bottom.setAll(0xff0000);

// actions
function pulse() {
    top1.startBrightnessTransition(0, 200, 1000, 2, true)
    top2.startBrightnessTransition(0, 200, 1000, 2, true)
    bottom.startBrightnessTransition(0, 200, 1000, 2, true)
}

// events
proximity.onEvent(JDPromixityEvent.Close, function () {
    pulse();
})