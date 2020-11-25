declare namespace pins {
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_BATTSENSE)
    const VBAT: AnalogInPin;

    //% fixedInstance shim=pxt::getPin(P0_29)
    const LIGHT_FAULT: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(P1_8)
    const LIGHT_PWR: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_NEOPIXEL)
    const LIGHT_DATA: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(P1_5)
    const LDO_EN: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_LED)
    const LED: DigitalInOutPin;
}
