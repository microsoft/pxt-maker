declare namespace pins {

    //% fixedInstance shim=pxt::getPin(PIN_A0)
    const A0: PwmPin;
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

    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const D2: DigitalInOutPin;    
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const D3: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D6)
    const D6: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D9)
    const D9: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D10)
    const D10: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D12)
    const D12: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const D13: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_SCL)
    const SCL: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SDA)
    const SDA: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_RXLED)
    const RXLED: DigitalInOutPin;
}

declare namespace input {
    /**
     * Capacitive pin A0
     */
    //% block="touch D0" fixedInstance
    //% shim=pxt::getTouchButton(PIN_A0)
    const touchA0: TouchButton;

    /**
     * Capacitive pin A1
     */
    //% block="touch D1" fixedInstance
    //% shim=pxt::getTouchButton(PIN_A1)
    const touchA1: TouchButton;

    /**
     * Capacitive pin A2
     */
    //% block="touch D2" fixedInstance
    //% shim=pxt::getTouchButton(PIN_A2)
    const touchA2: TouchButton;

    /**
      * Capacitive pin A3
     */
    //% block="touch D3" fixedInstance
    //% shim=pxt::getTouchButton(PIN_A3)
    const touchA3: TouchButton;

    /**
     * Capacitive pin A4
     */
    //% block="touch D4" fixedInstance
    //% shim=pxt::getTouchButton(PIN_A4)
    const touchA4: TouchButton;

    /**
     * Capacitive pin A5
     */
    //% block="touch D5" fixedInstance
    //% shim=pxt::getTouchButton(PIN_A5)
    const touchA5: TouchButton;


    /**
     * Button connecting A0 to GND.
     */
    //% block="button A0" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A0,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA0: Button;

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
}