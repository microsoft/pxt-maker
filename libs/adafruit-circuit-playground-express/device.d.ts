declare namespace pins {
    // pin-pads
    //% fixedInstance shim=pxt::getPin(PIN_A0)
    const A0: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A1)
    const A1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A2)
    const A2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A3)
    const A3: PwmPin;

    //% fixedInstance shim=pxt::getPin(PIN_A4)
    const A4: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A5)
    const A5: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A6)
    const A6: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A7)
    const A7: PwmPin;

    // Define aliases, as Digital Pins

    //% fixedInstance shim=pxt::getPin(PIN_A4)
    const SCL: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_A5)
    const SDA: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_A6)
    const RX: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_A7)
    const TX: DigitalPin;

    // Aliases for built-in components

    //% fixedInstance shim=pxt::getPin(PIN_A8)
    const A8: PwmPin; // light
    //% fixedInstance shim=pxt::getPin(PIN_A9)
    const A9: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const D4: DigitalPin; // A
    //% fixedInstance shim=pxt::getPin(PIN_D5)
    const D5: DigitalPin; // B
    //% fixedInstance shim=pxt::getPin(PIN_D7)
    const D7: DigitalPin; // Slide
    //% fixedInstance shim=pxt::getPin(PIN_D8)
    const D8: DigitalPin; // Neopixel

    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const D13: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const LED: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PIN_A10)
    const A10: PwmPin; // mic
}


declare namespace input {
    /**
     * Left button.
     */
    //% indexedInstanceNS=input indexedInstanceShim=pxt::getButton
    //% block="button A" weight=95 fixedInstance
    //% shim=pxt::getButton(0)
    const buttonA: Button;

    /**
     * Right button.
     */
    //% block="button B" weight=94 fixedInstance
    //% shim=pxt::getButton(1)
    const buttonB: Button;

    /**
     * Left and Right button.
     */
    //% block="buttons A+B" weight=93 fixedInstance
    //% shim=pxt::getButton(2)
    const buttonsAB: Button;
}

declare namespace input {
    /**
     * Capacitive pin A1
     */
    //% block="pin A1" fixedInstance shim=pxt::getTouchButton(PIN_A1)
    const pinA1: TouchButton;

    /**
     * Capacitive pin A2
     */
    //% block="pin A2" fixedInstance shim=pxt::getTouchButton(PIN_A2)
    const pinA2: TouchButton;

    /**
     * Capacitive pin A3
     */
    //% block="pin A3" fixedInstance shim=pxt::getTouchButton(PIN_A3)
    const pinA3: TouchButton;

    /**
     * Capacitive pin A4
     */
    //% block="pin A4" fixedInstance shim=pxt::getTouchButton(PIN_A4)
    const pinA4: TouchButton;

    /**
     * Capacitive pin A5
     */
    //% block="pin A5" fixedInstance shim=pxt::getTouchButton(PIN_A5)
    const pinA5: TouchButton;

    /**
     * Capacitive pin A6
     */
    //% block="pin A6" fixedInstance shim=pxt::getTouchButton(PIN_A6)
    const pinA6: TouchButton;

    /**
     * Capacitive pin A7
     */
    //% block="pin A7" fixedInstance shim=pxt::getTouchButton(PIN_A7)
    const pinA7: TouchButton;
}