declare namespace pins {
    // pin-pads
    //% fixedInstance shim=pxt::getPin(PIN_A0)
    const A0: AnalogOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_A1)
    const A1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A2)
    const A2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A3)
    const A3: AnalogInPin;

    //% fixedInstance shim=pxt::getPin(PIN_A4)
    const A4: AnalogInPin;
    //% fixedInstance shim=pxt::getPin(PIN_A5)
    const A5: AnalogInPin;
    
    //% fixedInstance shim=pxt::getPin(PIN_A6)
    const A6: AnalogInPin; // could be PwmPin when mbed fixed
    //% fixedInstance shim=pxt::getPin(PIN_A7)
    const A7: AnalogInPin; // could be PwmPin when mbed fixed

    // Define aliases, as Digital Pins

    //% fixedInstance shim=pxt::getPin(PIN_A4)
    const SCL: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_A5)
    const SDA: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_A6)
    const RX: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_A7)
    const TX: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const LED: DigitalPin;
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