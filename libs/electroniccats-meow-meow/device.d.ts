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

    //% fixedInstance shim=pxt::getPin(PIN_A8)
    const A8: AnalogInPin; // could be PwmPin when mbed fixed
    //% fixedInstance shim=pxt::getPin(PIN_A9)
    const A9: AnalogInPin; // could be PwmPin when mbed fixed

    // Define aliases, as Digital Pins

    //% fixedInstance shim=pxt::getPin(SCL)
    const SCL: DigitalPin;
    //% fixedInstance shim=pxt::getPin(SDA)
    const SDA: DigitalPin;
    //% fixedInstance shim=pxt::getPin(RX)
    const RX: DigitalPin;
    //% fixedInstance shim=pxt::getPin(TX)
    const TX: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_MISO)
    const MISO: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_MOSI)
    const MOSI: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const LED: DigitalPin;
}

declare namespace input {
    /**
     * Capacitive pin A1
     */
    //% block="touch A1" fixedInstance shim=pxt::getTouchButton(PIN_A1)
    const touchA1: TouchButton;

    /**
     * Capacitive pin A2
     */
    //% block="touch A2" fixedInstance shim=pxt::getTouchButton(PIN_A2)
    const touchA2: TouchButton;

    /**
     * Capacitive pin A3
     */
    //% block="touch A3" fixedInstance shim=pxt::getTouchButton(PIN_A3)
    const touchA3: TouchButton;

    /**
     * Capacitive pin A4
     */
    //% block="touch A4" fixedInstance shim=pxt::getTouchButton(PIN_A4)
    const touchA4: TouchButton;

    /**
     * Capacitive pin A5
     */
    //% block="touch A5" fixedInstance shim=pxt::getTouchButton(PIN_A5)
    const touchA5: TouchButton;

    /**
     * Capacitive pin A6
     */
    //% block="touch A6" fixedInstance shim=pxt::getTouchButton(PIN_A6)
    const touchA6: TouchButton;

    /**
     * Capacitive pin A7
     */
    //% block="touch A7" fixedInstance shim=pxt::getTouchButton(PIN_A7)
    const touchA7: TouchButton;

    /**
     * Capacitive pin A8
     */
    //% block="touch A8" fixedInstance shim=pxt::getTouchButton(PIN_A8)
    const touchA8: TouchButton;

    /**
     * Capacitive pin A9
     */
    //% block="touch A9" fixedInstance shim=pxt::getTouchButton(PIN_A9)
    const touchA9: TouchButton;
}