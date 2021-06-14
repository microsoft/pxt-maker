declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: DigitalInOutPin; // orange
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const P1: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const P3: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const P4: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D5)
    const P5: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D6)
    const P6: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_ILIM_FAULT0)
    const ILIM_FAULT0: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_ILIM_FAULT1)
    const ILIM_FAULT1: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_ILIM_FAULT2)
    const ILIM_FAULT2: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_A0)
    const A0: PwmPin;
}