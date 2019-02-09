declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const D0: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const D1: AnalogOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const D2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const D3: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const D4: PwmPin;
    
    //% fixedInstance shim=pxt::getPin(PIN_A0)
    const A0: AnalogOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_A1)
    const A1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A2)
    const A2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A3)
    const A3: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A4)
    const A4: PwmPin;

    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const D13: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const SDA: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const SCL: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const SCK: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const MISO: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const MOSI: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const RX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const TX: DigitalInOutPin;
}

declare namespace input {
    /**
     * Capacitive pin D1
     */
    //% block="touch D1" fixedInstance shim=pxt::getTouchButton(PIN_D1)
    const touchD1: TouchButton;

    /**
     * Capacitive pin D3
     */
    //% block="touch D3" fixedInstance shim=pxt::getTouchButton(PIN_D3)
    const touchD3: TouchButton;

    /**
     * Capacitive pin D4
     */
    //% block="touch D4" fixedInstance shim=pxt::getTouchButton(PIN_D4)
    const touchD4: TouchButton;

    /**
     * Button connecting D0 to GND.
     */
    //% block="button D0" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D0,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD0: Button;


    /**
     * Button connecting D1 to GND.
     */
    //% block="button D1" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D1,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD1: Button;


    /**
     * Button connecting D2 to GND.
     */
    //% block="button D2" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D2,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD2: Button;
    
    
    /**
     * Button connecting D3 to GND.
     */
    //% block="button D3" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D3,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD3: Button;
    
    
    /**
     * Button connecting D4 to GND.
     */
    //% block="button D4" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D4,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD4: Button;
}


