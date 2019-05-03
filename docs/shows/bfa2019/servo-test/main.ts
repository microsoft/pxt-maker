/*

const tattoo = jacdac.touchButtonsClient;
const ser = new jacdac.ServosClient("ser", 2);

let running = false;
let forward = false;
function anim() {
    if (running) return;
    running = true;
    if (forward) {
        ser.setAngle(0, 180);
        ser.setAngle(1, 0);
        pause(800)
    } else {
        ser.setAngle(0, 0);
        ser.setAngle(1, 180);
        pause(800)
    }
    forward = !forward;
    running = false;
}

function stepUpdate(): () => boolean {
    let active = true;
    return function () {
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

input.onCustomGesture(42, stepUpdate(), anim); // register


*/

namespace servos {
    //% fixedInstance
    export const servoA1 = new servos.PinServo(pins.A1);
    //% fixedInstance
    export const servoA2 = new servos.PinServo(pins.A2);
}

let running = false;
let forward = false;
function anim() {
    if (running) return;
    running = true;
    if (forward) {
        servos.servoA1.setAngle(180)
        servos.servoA2.setAngle(0)
        pause(800)
    } else {
        servos.servoA1.setAngle(0)
        servos.servoA2.setAngle(180)
        pause(800)
    }
    forward = !forward;
    running = false;
}

function stepUpdate(): () => boolean {
    let active = true;
    return function () {
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

input.onCustomGesture(42, stepUpdate(), anim); // register
