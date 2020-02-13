namespace jacdac {
    //% fixedInstance whenUsed block="button A service"
    export const buttonAService = new ButtonService("buttonA", input.buttonA);
    //% fixedInstance whenUsed block="button B service"
    export const buttonBService = new ButtonService("buttonB", input.buttonB);
    //% fixedInstance whenUsed block="light service"
    export const lightService = new LightService("light", light.pixels);
}
