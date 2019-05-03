//const motion = motion.
const lights1 = light.pixels;
//const motion = jacdac.accelerometerClient;
lights1.setLength(120); // 62
lights1.setAll(0x0000ff);
lights1.setBuffered(true);

let cols = [0x0000ff, 0xff0000, 0xffff00, 0x00ff00];
let coli = 0;

function pulse() {
    lights1.setAll(cols[coli]);
    coli = (coli + 1) % cols.length;
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
