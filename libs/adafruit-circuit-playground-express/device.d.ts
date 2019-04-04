declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const LED: PwmOnlyPin;

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
    const SCL: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_A5)
    const SDA: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_A6)
    const RX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_A7)
    const TX: DigitalInOutPin;
}
