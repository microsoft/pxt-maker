declare namespace pins {
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_BATTSENSE)
    const VBAT: AnalogInPin;

    //% fixedInstance shim=pxt::getPinCfg(1093769773)
    const LIGHT_FAULT: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(605349461)
    const LIGHT_PWR: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_NEOPIXEL)
    const NEOPIXEL: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(P1_5)
    const LDO_EN: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_LED)
    const LED: DigitalInOutPin;
}
