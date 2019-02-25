declare namespace pins {
    
    //% fixedInstance shim=pxt::getPin(PIN_A1)
    const A1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A2)
    const A2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A3)
    const A3: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A4)
    const A4: PwmPin;    

    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const D1: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const D2: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const D3: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const D4: DigitalInOutPin;

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
    //% shim=pxt::getButtonByPin(PIN_A1,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA1: Button;

    /**
     * Button connecting A6 to GND.
     */
    //% block="button A6" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A2,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA2: Button;

    /**
     * Button connecting A7 to GND.
     */
    //% block="button A7" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A3,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA3: Button;

    /**
     * Button connecting A8 to GND.
     */
    //% block="button A8" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A4,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA4: Button;


    /**
     * Capacitive pin A5
     */
    //% block="touch D5" fixedInstance
    //% shim=pxt::getTouchButton(PIN_A1)
    const touchA1: TouchButton;

    /**
     * Capacitive pin A6
     */
    //% block="touch D6" fixedInstance
    //% shim=pxt::getTouchButton(PIN_A2)
    const touchA2: TouchButton;

    /**
      * Capacitive pin A7
     */
    //% block="touch D7" fixedInstance
    //% shim=pxt::getTouchButton(PIN_A3)
    const touchA3: TouchButton;

    /**
     * Capacitive pin A8
     */
    //% block="touch D8" fixedInstance
    //% shim=pxt::getTouchButton(PIN_A4)
    const touchA4: TouchButton;
 
}
