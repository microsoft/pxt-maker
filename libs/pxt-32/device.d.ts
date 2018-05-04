declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_A0)
    const A0: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A1)
    const A1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A2)
    const A2: PwmPin;

    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const D0: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const D1: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const D2: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const D3: PwmOnlyPin;
    
    //% fixedInstance shim=pxt::getPin(P0_9)
    const MENU: PwmOnlyPin;
    
    /*
    //% fixedInstance shim=pxt::getPin(P0_13)
    const LED1: DigitalPin;

    //% fixedInstance shim=pxt::getPin(P0_14)
    const LED2: DigitalPin;

    //% fixedInstance shim=pxt::getPin(P0_15)
    const LED3: DigitalPin;

    //% fixedInstance shim=pxt::getPin(P0_16)
    const LED4: DigitalPin;
    */

    //% fixedInstance shim=pxt::getPin(PIN_SDA)
    const SDA: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCL)
    const SCL: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PIN_SCK)
    const SCK: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_MISO)
    const MISO: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_MOSI)
    const MOSI: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PIN_RX)
    const RX: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_TX)
    const TX: DigitalPin;
}

declare namespace input {
    //% block="button 1" fixedInstance
    //% shim=pxt::getButtonByPin(P0_11,BUTTON_ACTIVE_LOW_PULL_UP)
    const button1: Button;
    //% block="button 2" fixedInstance
    //% shim=pxt::getButtonByPin(P0_13,BUTTON_ACTIVE_LOW_PULL_UP)
    const button2: Button;
    //% block="button 3" fixedInstance
    //% shim=pxt::getButtonByPin(P0_30,BUTTON_ACTIVE_LOW_PULL_UP)
    const button3: Button;
    //% block="button 4" fixedInstance
    //% shim=pxt::getButtonByPin(P0_28,BUTTON_ACTIVE_LOW_PULL_UP)
    const button4: Button;

    //% block="button E0" fixedInstance
    //% shim=pxt::getButtonByPin(P0_29,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonE0: Button;
    //% block="button E1" fixedInstance
    //% shim=pxt::getButtonByPin(P0_10,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonE1: Button;
}

