namespace jacdac {
    //% fixedInstance whenUsed block="button A service"
    export const buttonAService = new ButtonService("A", input.buttonA);
    //% fixedInstance whenUsed block="button B service"
    export const buttonBService = new ButtonService("B", input.buttonB);
    //% fixedInstance whenUsed block="light service"
    export const lightService = new LightService("light", light.pixels);
}