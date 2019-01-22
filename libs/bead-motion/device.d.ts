declare namespace pins {
    
    //% fixedInstance shim=pxt::getPin(PIN_D5)
    const D5: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D6)
    const D6: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D7)
    const D7: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D8)
    const D8: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_A5)
    const A5: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A5)
    const A6: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A5)
    const A7: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A5)
    const A8: PwmPin;

    //% fixedInstance shim=pxt::getPin(PIN_SDA)
    const SDA: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCL)
    const SCL: DigitalInOutPin;

}

declare namespace input {

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
     * Button connecting D5 to GND.
     */
    //% block="button D5" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D5,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD5: Button;

    /**
     * Button connecting D6 to GND.
     */
    //% block="button D6" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D6,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD6: Button;

    /**
     * Button connecting D7 to GND.
     */
    //% block="button D7" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D7,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD7: Button;

    /**
     * Button connecting D8 to GND.
     */
    //% block="button D8" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D8,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD8: Button;
 
}
