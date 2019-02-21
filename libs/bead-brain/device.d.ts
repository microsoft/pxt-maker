declare namespace pins {
    
    //% fixedInstance shim=pxt::getPin(PIN_A1)
    const A1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A2)
    const A2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A3)
    const A3: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A4)
    const A4: PwmPin;    
    //% fixedInstance shim=pxt::getPin(PIN_A5)
    const A5: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A6)
    const A6: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A7)
    const A7: PwmPin;    

    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const D1: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const D2: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const D3: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const D4: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D5)
    const D5: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D6)
    const D6: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D7)
    const D7: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_TX)
    const TX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const LED: DigitalInOutPin;    

}

declare namespace input {

    /**
     * Button connecting A1 to GND.
     */
    //% block="button A1" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A1,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA1: Button;

    /**
     * Button connecting A2 to GND.
     */
    //% block="button A2" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A2,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA2: Button;

    /**
     * Button connecting A3 to GND.
     */
    //% block="button A3" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A3,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA3: Button;

    /**
     * Button connecting A4 to GND.
     */
    //% block="button A4" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A4,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA4: Button;

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
     * Capacitive pin A1
     */
    //% block="touch A1" fixedInstance shim=pxt::getTouchButton(PIN_A1)
    const touchA1: TouchButton;

    /**
     * Capacitive pin A2
     */
    //% block="touch A2" fixedInstance shim=pxt::getTouchButton(PIN_A2)
    const touchA2: TouchButton;

    /**
     * Capacitive pin A3
     */
    //% block="touch A3" fixedInstance shim=pxt::getTouchButton(PIN_A3)
    const touchA3: TouchButton;

    /**
     * Capacitive pin A4
     */
    //% block="touch A4" fixedInstance shim=pxt::getTouchButton(PIN_A4)
    const touchA4: TouchButton;

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
 
}
