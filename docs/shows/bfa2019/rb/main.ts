// Rebecca

// hardware
const tattoo = jacdac.touchButtonsClient;
const lights = light.pixels;
const lights2 = light.pixels2;
lights.setBrightness(200);
lights.setLength(50);
lights2.setBrightness(200);
lights2.setLength(50);
tattoo.onConnected = function() {
    tattoo.calibrate()
}

let silver = [0,1,2,3,5,7,12]
let black = [0,3,11]

let strips = [lights, lights2]
let indirs = [silver, black];
let dripping = [false,false];
// actions

function drip(i: number) {
    if (!dripping[i]) {
        let light = strips[i]
        let indir = indirs[i]
        dripping[i] = true
        light.clear();
        for(let i=0; i<indir.length;i++) {
            light.setPixelColor(indir[i],0xffffff)
            if (i>0) {
                light.setPixelColor(indir[i-1],0x000000)
            }  
            pause(500)
        }
        light.clear();
        dripping[i] = false;
    }
}

// events
tattoo.onEvent(2, JDButtonEvent.Down, function () {
    control.runInBackground(()=>{drip(0)});
    control.runInBackground(()=>{drip(1);drip(1)});
})