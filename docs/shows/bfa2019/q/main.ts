// Q

// hardware: too many neopixels, sticks in bootloader mode
let lights = [light.pixels,light.pixels2, light.pixels7, light.pixels5]
//let proximity = jacdac.proximityClient

for(let i=0; i<lights.length; i++) {
    lights[i].setBrightness(200);
    lights[i].setLength(120);
    lights[i].setBuffered(true);
}

  function pulse(j:number) {
      let the = lights[j]
      let last = the.length()-1
      the.clear();
      for (let i = 0; i < 20; i++) {
          the.setPixelColor(last,0x0000FF); the.move(LightMove.Shift,-1); the.show();
          pause(1);
      }
      for (let i = 0; i < the.length(); i++) {
        the.move(LightMove.Shift,-1); the.show();
        pause(1);
      }
}

forever(function () {
    for(let i=0; i<lights.length; i++) {
        pulse(i);
    }
})

// input.onGesture(Gesture.Shake,function () {
//     for(let i=0; i<lights.length; i++) {
//         pulse(i);
//     }
// });

//motion.onCustomGesture(BeadGesture.Step, function () {
//    pulse();
//})
