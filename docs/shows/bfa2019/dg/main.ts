// dynasty-george

// Returns a single rgb color interpolation between given rgb color
// based on the factor given; via https://codepen.io/njmcode/pen/axoyD?editors=0010
function interpolateColor(color1: number, color2: number, factor: number) {
  //  factor = easing.inOutCubic(factor);
    let r1 = color1 >> 16
    let r2 = color2 >> 16
    let g1 = (color1 & 0xff00) >> 8
    let g2 = (color2 & 0xff00) >> 8
    let b1 = color1 & 0xff
    let b2 = color2 & 0xff
    let r = (r1 + factor * (r2 - r1)) | 0x00
    let g = (g1 + factor * (g2 - g1)) | 0x00
    let b = (b1 + factor * (b2 - b1)) | 0x00
    return (r << 16) | (g << 8) | b;
};
// My function to interpolate between two colors completely, returning an array
function interpolateColors(color1: number, color2: number, steps: number, i: number) {
    let stepFactor = i / (steps - 1);
    return interpolateColor(color1, color2, stepFactor);
}

// sunset:
// pink = 0xff3399
// yellow = 0xff8000

// hardware
//const motion = motion.
const lights1 = light.pixels;
//const motion = jacdac.accelerometerClient;
lights1.setLength(62); // 62
lights1.setBuffered(true);

function pulse() {
    let mid = lights1.length()>>1
    for (let i = 0; i < mid; i++) {
        lights1.setPixelColor(i, interpolateColors(0xff0000, 0x0000FF, mid, i))
    }
    for (let i = 0; i < mid; i++) {
        lights1.setPixelColor(i+mid, interpolateColors(0x0000FF, 0xFF0000, mid, i))
    }
    lights1.show();
    lights1.startBrightnessTransition(96, 0, 800, 1, true,
        new light.EasingBrightnessTransition(easing.inOutCubic));
}

function stepUpdate(): () => boolean {
    let active = true;
    return function() {
        const s = input.acceleration(Dimension.Strength);        
        if (!active && s > 1500) {
            active = true;
            return true;
        } else if (s < 1200) {
            active = false;
        }
        return false;
    }
}

input.onCustomGesture(42, stepUpdate(), pulse); // register

// events
//motion.onCustomGesture(BeadGesture.Step, function () {
//    pulse();
//})
