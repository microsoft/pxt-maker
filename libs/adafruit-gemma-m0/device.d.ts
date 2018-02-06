declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const D0: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const D1: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const D2: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PIN_SDA)
    const SDA: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCL)
    const SCL: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PIN_SCK)
    const SCK: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_MISO)
    const MISO: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_OSI)
    const MOSI: DigitalPin;
}

declare namespace input {    
    /**
     * Capacitive pin D0
     */
    //% block="pin D0" fixedInstance shim=pxt::getTouchButton(PIN_D0)
    const pinD0: TouchButton;

    /**
     * Capacitive pin D1
     */
    //% block="pin D1" fixedInstance shim=pxt::getTouchButton(PIN_D1)
    const pinD1: TouchButton;

    /**
     * Capacitive pin D4
     */
    //% block="pin D2" fixedInstance shim=pxt::getTouchButton(PIN_D2)
    const pinD2: TouchButton;

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
}
