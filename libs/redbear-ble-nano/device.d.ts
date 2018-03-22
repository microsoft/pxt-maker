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
    
    
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const D13: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const LED: DigitalPin;

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
    /**
     * Button connecting P02 to GND.
     */
    //% block="button P02" fixedInstance
    //% shim=pxt::getButtonByPin(P0_2,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonP02: Button;
}


