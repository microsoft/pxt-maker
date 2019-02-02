declare namespace pins {
    
    //% fixedInstance shim=pxt::getPin(PIN_A5)
    const A5: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A6)
    const A6: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A7)
    const A7: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A8)
    const A8: PwmPin;    

    //% fixedInstance shim=pxt::getPin(PIN_D5)
    const D5: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D6)
    const D6: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D7)
    const D7: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D8)
    const D8: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_TX)
    const TX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_NEOPIXEL)
    const NEOPIXEL: DigitalInOutPin;

}

declare namespace input {

    /**
     * Button connecting A5 to GND.
     */
    //% block="button A5" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A5,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA5: Button;

    /**
     * Button connecting A6 to GND.
     */
    //% block="button A6" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A6,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA6: Button;

    /**
     * Button connecting A7 to GND.
     */
    //% block="button A7" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A7,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA7: Button;

    /**
     * Button connecting A8 to GND.
     */
    //% block="button A8" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A8,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA8: Button;


    /**
     * Capacitive pin D5
     */
    //% block="button D5" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D5,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const touchD5: TouchButton;

    /**
     * Capacitive pin D6
     */
    //% block="button D6" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D6,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const touchD6: TouchButton;

    /**
      * Capacitive pin D7
     */
    //% block="button D7" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D7,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const touchD7: TouchButton;

    /**
     * Capacitive pin D8
     */
    //% block="button D8" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D8,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const touchD8: TouchButton;
 
}
