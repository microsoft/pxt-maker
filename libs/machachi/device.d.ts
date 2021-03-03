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
    //% fixedInstance shim=pxt::getPin(PIN_BTN_SOFT_RESET)
    const SOFT_RESET: DigitalInOutPin;
}

declare namespace input {

    //% block="button east" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D0,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const EAST: Button;
    //% block="button south east" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D1,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const SOUTH_EAST: Button;
    //% block="button south" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D2,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const SOUTH: Button;

    //% block="button south west" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D3,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const SOUTH_WEST: Button;

    //% block="button west" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D4,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const WEST: Button;

    //% block="button north west" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D5,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const NORTH_WEST: Button;

    //% block="button north" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D6,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const NORTH: Button;

    //% block="button north east" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D7,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const NORTH_EAST: Button;

    //% block="button soft reset" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_BTN_SOFT_RESET,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const SOFT_RESET: Button;
}

