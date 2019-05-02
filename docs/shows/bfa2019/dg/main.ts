// dynasty-george

// sunset:
// pink = 0xff3399
// yellow = 0xff8000

// hardware
const lights1 = light.pixels;

lights1.setLength(62);


//lights1.setBrightness(0);
//lights1.setAll(0xff8000);
function show() {
for(let i = 0; i < 20; i++) {
    lights1.setPixelColor(i,0xff3360)
}
for(let i = 20; i < 40; i++) {
    lights1.setPixelColor(i,0xd02000)
}

for(let i = 41; i < 62; i++) {
    lights1.setPixelColor(i,0xff8000)
}
lights1.show();
}

/*
// actions
let rotate = false
function pulse() {
    if (!rotate) {
        rotate = true;
        for(let i=0;i<100;i++) {
            lights1.
        }
        rotate = false;
    }
}
*/

input.onGesture(Gesture.Shake, function () {
    show();
})

// events
//motion.onCustomGesture(BeadGesture.Step, function () {
//    pulse();
//})
