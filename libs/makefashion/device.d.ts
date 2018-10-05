declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const D0: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const D1: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const D2: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const D3: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_SDA)
    const SDA: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCL)
    const SCL: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PB10)
    const SDA2: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PB11)
    const SCL2: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_TX)
    const TX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_RX)
    const RX: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: DigitalInOutPin;
}

// TODO check if touch support on all D* pins

declare namespace input {
    /**
     * Capacitive pin D0
     */
    //% block="touch D0" fixedInstance shim=pxt::getTouchButton(PIN_D0)
    const touchD0: TouchButton;

    /**
     * Capacitive pin D1
     */
    //% block="touch D1" fixedInstance shim=pxt::getTouchButton(PIN_D1)
    const touchD1: TouchButton;

    /**
     * Capacitive pin D2
     */
    //% block="touch D2" fixedInstance shim=pxt::getTouchButton(PIN_D2)
    const touchD2: TouchButton;

    /**
     * Capacitive pin D3
     */
    //% block="touch D3" fixedInstance shim=pxt::getTouchButton(PIN_D3)
    const touchD3: TouchButton;

    /**
     * Button connecting D0 to GND.
     */
    //% block="button D0" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D0,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonD0: Button;

    /**
     * Button connecting D1 to GND.
     */
    //% block="button D1" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D1,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonD1: Button;

    /**
     * Button connecting D2 to GND.
     */
    //% block="button D2" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D2,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonD2: Button;

    /**
     * Button connecting D2 to GND.
     */
    //% block="button D3" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D3,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonD3: Button;
}
