namespace input {
    function stepUpdate(): () => boolean {
        let active = true;
        return function() {
            const s = input.acceleration(Dimension.Strength);        
            if (!active && s > 2000) {
                active = true;
                return true;
            } else if (s < 1500) {
                active = false;
            }
            return false;
        }
    }

    function stepHandler(): void {
        jacdac.accelerometerService.raiseCustomGestureEvent(BeadGesture.Step);
    }

    input.onCustomGesture(BeadGesture.Step, stepUpdate(), stepHandler); // register

    function lightStepUpdate(): () => boolean {
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

    function lightStepHandler(): void {
        jacdac.accelerometerService.raiseCustomGestureEvent(BeadGesture.LightStep);
    }

    input.onCustomGesture(BeadGesture.LightStep, lightStepUpdate(), lightStepHandler); // register
}