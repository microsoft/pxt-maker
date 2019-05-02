// dj

// hardware
const color = jacdac.colorSensorClient;
const lights = [light.pixels, light.pixels2, light.pixels3];

// actions
color.onStateChanged(function () {
    const hue = color.lightHue();
    lights.forEach(l => l.setAll(light.hsv(hue, 0xff, 0xff)));
})

// events
color.setStreaming(true);