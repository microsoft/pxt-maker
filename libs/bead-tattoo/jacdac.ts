namespace jacdac {
    /**
     * A service that exposes the state of all tattoo buttons
     */
    //% fixedInstance whenUsed block="touch buttons"
    export const touchButtonsService = new TouchButtonsService("tcs",
        [input.touchA0,
        input.touchA1,
        input.touchA2,
        input.touchA3,
        input.touchA4,
        input.touchA5]);
}