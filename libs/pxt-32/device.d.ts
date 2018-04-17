declare namespace pins {
    //% fixedInstance shim=pxt::getPin(P0_2)
    const P02: PwmPin;
    //% fixedInstance shim=pxt::getPin(P0_4)
    const P04: PwmPin;
    //% fixedInstance shim=pxt::getPin(P0_28)
    const P28: PwmPin;
    //% fixedInstance shim=pxt::getPin(P0_29)
    const P29: PwmPin;
    //% fixedInstance shim=pxt::getPin(P0_30)
    const P30: PwmPin;
    //% fixedInstance shim=pxt::getPin(P0_11)
    const P11: PwmPin;
    //% fixedInstance shim=pxt::getPin(P0_12)
    const P12: PwmPin;
    
    
    //% fixedInstance shim=pxt::getPin(P0_17)
    const LED1: DigitalPin;

    // fixedInstance shim=pxt::getPin(P1_00)
    // const LED2: DigitalPin;

    //% fixedInstance shim=pxt::getPin(P0_19)
    const LED3: DigitalPin;

    //% fixedInstance shim=pxt::getPin(P0_20)
    const LED4: DigitalPin;

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
    //% shim=pxt::getButtonByPin(P0_14,BUTTON_ACTIVE_LOW_PULL_UP)
    const button2: Button;
    //% block="button 3" fixedInstance
    //% shim=pxt::getButtonByPin(P0_15,BUTTON_ACTIVE_LOW_PULL_UP)
    const button3: Button;
    //% block="button 4" fixedInstance
    //% shim=pxt::getButtonByPin(P0_16,BUTTON_ACTIVE_LOW_PULL_UP)
    const button4: Button;

    //% block="button E0" fixedInstance
    //% shim=pxt::getButtonByPin(P0_30,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonE0: Button;
    //% block="button E1" fixedInstance
    //% shim=pxt::getButtonByPin(P0_31,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonE1: Button;
}

