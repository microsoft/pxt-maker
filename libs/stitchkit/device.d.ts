declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_A0)
    const A0: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A1)
    const A1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A2)
    const A2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A3)
    const A3: PwmPin;

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
    //% fixedInstance shim=pxt::getPin(DAL.PA00)
    const SDA2: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(DAL.PA01)
    const SCL2: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_TX)
    const TX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_RX)
    const RX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_RXLED)
    const RXLED: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_MOSI)
    const MOSI: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCK)
    const SCK: DigitalInOutPin;

}

// TODO check if touch support on all D* pins

declare namespace input {

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
     * Capacitive pin D0 (or IO0)
     */
    //% block="touch D0" fixedInstance shim=pxt::getTouchButton(PIN_D0)
    const touchD0: TouchButton;

    /**
     * Capacitive pin D1 (or IO1)
     */
    //% block="touch D1" fixedInstance shim=pxt::getTouchButton(PIN_D1)
    const touchD1: TouchButton;

    /**
     * Capacitive pin D2 (or IO2)
     */
    //% block="touch D2" fixedInstance shim=pxt::getTouchButton(PIN_D2)
    const touchD2: TouchButton;

    /**
     * Capacitive pin D3 (or IO3)
     */
    //% block="touch D3" fixedInstance shim=pxt::getTouchButton(PIN_D3)
    const touchD3: TouchButton;

}
