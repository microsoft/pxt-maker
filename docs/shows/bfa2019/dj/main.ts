// dj

// hardware
const lights = [light.pixels, light.pixels2, light.pixels5, light.pixels6];
const colors = [0xFF0000, 0xFFFFFF, 0x00FFFF, 0xFFFF00]
for(let i=0; i<lights.length; i++) {
    lights[i].setLength(120);
    lights[i].setBrightness(0);
    lights[i].setAll(colors[i]);
}

forever(function () {
    for(let i=0; i<lights.length; i++) {
        lights[i].startBrightnessTransition(80, 0, 1000);
        pause(1000)
    }
})
