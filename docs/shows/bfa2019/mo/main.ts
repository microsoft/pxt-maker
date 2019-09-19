// MO

// hardware
const tattoo = jacdac.touchButtonsClient;
const btns = [4, 5, 0];
const center = light.pixels;
const left = light.pixels2;//.range(20, 100);
const right = light.pixels7;
const strips = [center, left, right];

strips.forEach(strip => {
    strip.setBrightness(60);
    strip.setLength(30);
    strip.setBuffered(true);
});


let running = false;
tattoo.onConnected = function() {
    tattoo.calibrate();
}
tattoo.calibrate();
function animLeft() {
    while (running) {
        left.move(LightMove.Shift);
        if (Math.random() > 0.8)
            left.setPixelColor(0, 0xff00ff);
        left.show();
        pause(1)
    }
}
function animRight() {
    while (running) {
        right.move(LightMove.Shift, -1);
        if (Math.random() > 0.8)
            right.setPixelColor(right.length() - 1, 0xff00ff);
        right.show();
        pause(1)
    }
}
function animCenter() {
    const l = center.range(0, center.length() / 2)
    const r = center.range(center.length() / 2, center.length() / 2)
    while (running) {
        l.move(LightMove.Shift);
        if (Math.random() > 0.8)
            l.setPixelColor(0, 0xff00ff);
        r.move(LightMove.Shift, -1);
        if (Math.random() > 0.8)
            r.setPixelColor(r.length() - 1, 0xff00ff);
        center.show();  
        pause(1)
    }
}

function anim() {
    if (running) return;
    running = true;
    control.runInBackground(animCenter);
    control.runInBackground(animLeft);
    control.runInBackground(animRight);
}
anim();

// events
btns.forEach(btn => {
    tattoo.onEvent(btn, JDButtonEvent.Down, function () {
        anim();
    })
})
