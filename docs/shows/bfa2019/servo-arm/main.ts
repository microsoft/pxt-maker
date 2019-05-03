namespace servos {
    //% fixedInstance
    export const servoA1 = new servos.PinServo(pins.A1);
    //% fixedInstance
    export const servoA2 = new servos.PinServo(pins.A2);
}

namespace jacdac {
    //% fixedInstance
    export const servosService = new jacdac.ServosService("servos", [servos.servoA1, servos.servoA2]);
}

jacdac.servosService.start();
jacdac.instance().setDeviceName("R");