declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_DOTSTAR_DATA)
    const APA102_DATA: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_DOTSTAR_CLOCK)
    const APA102_CLOCK: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const BUTTON_0: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const BUTTON_1: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const BUTTON_2: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const BUTTON_3: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const BUTTON_4: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D5)
    const BUTTON_5: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D6)
    const BUTTON_6: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D7)
    const BUTTON_7: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D8)
    const JD_01: DigitalInOutPin;
}

declare namespace input {

    //% block="button 0" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D0,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const button0: Button;
}

