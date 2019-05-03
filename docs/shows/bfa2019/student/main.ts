//const motion = motion.
const lights1 = light.pixels;
const lights7 = light.pixels7;
//const motion = jacdac.accelerometerClient;
lights1.setLength(50); // 62
lights1.setAll(0x00FF00);
lights1.setBuffered(true);


function pulse() {
    lights1.startBrightnessTransition(96, 0, 800, 1, true,
        new light.EasingBrightnessTransition(easing.inOutCubic));
    lights7.startBrightnessTransition(96, 0, 800, 1, true,
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
