// Q

// hardware
const lights = light.pixels;
lights.setBrightness(25);
lights.setLength(288)
const lights2 = light.pixels2;
lights2.setBrightness(25);
lights2.setLength(120)

const beam = lights.range(0,40);
beam.setAll(0xff0000);

const beam2 = lights2.range(0,40);
beam2.setAll(0x0000ff)
control.runInBackground(function(){
    while(true) {
        lights.move(LightMove.Rotate);
        pause(1);    
    }
})

control.runInBackground(function(){
    while(true) {
        lights2.move(LightMove.Rotate);
        pause(1);    
    }
})


// lights.setBrightness(0);
// lights.setAll(0xff00c0);
// lights.setLength(30);
// const promixity = jacdac.proximityClient;
// const motion = jacdac.accelerometerClient;

// // actions
// let on = false
// function pulse() {
//     if (!on) {
//         lights.startBrightnessTransition(0, 80, 2000, 2, true,
//             new light.EasingBrightnessTransition(easing.linear, easing.linear)
//         );
//     } else {
//         lights.clear()
//     }
//     on = !on;
// }

// // events
// promixity.onEvent(JDPromixityEvent.Close, function () {
//     pulse();
// })

//motion.onCustomGesture(BeadGesture.Step, function () {
//    pulse();
//})
