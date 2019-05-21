light.pixels3.setLength(120)
//light.pixels3.setAll(0xFF0000)

light.pixels5.setLength(80)
light.pixels5.setAll(0xFF0000)

light.pixels6.setLength(120)
light.pixels6.setAll(0xFF0000)


light.pixels5.startBrightnessTransition(72, 16, 600);
light.pixels6.startBrightnessTransition(72, 16, 600);

function pulse() {
    light.pixels5.startBrightnessTransition(200, 16, 600);
    light.pixels6.startBrightnessTransition(96, 16, 600);
}
input.onGesture(Gesture.Shake, function () {
    pulse();
})


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
