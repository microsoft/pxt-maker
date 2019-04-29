namespace servos {
    /**
     * A servo mounted on pin A1
     */
    //% fixedInstace whenUsed block="servo A1"
    export const servoA1 = new servos.PinServo(pins.A1);

    /**
     * A servo mounted on pin A2
     */
    //% fixedInstace whenUsed block="servo A2"
    export const servoA2 = new servos.PinServo(pins.A2);
}

namespace jacdac {
    /**
     * Gets the jacdac service for the servo A1
     */
    //% fixedInstance
    export const servoA1Service = new jacdac.ServoService("sA1", servos.servoA1);

    /**
     * Gets the jacdac service for the servo A2
     */
    //% fixedInstance
    export const servoA2Service = new jacdac.ServoService("sA2", servos.servoA2);
}