declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const D0: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const D1: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const D2: AnalogInPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const D3: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const D4: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPin(PIN_D5)
    const D5: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_D6)
    const D6: PwmOnlyPin;
    
    
    //% fixedInstance shim=pxt::getPin(PIN_LED)
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
        //% block="button 1" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D5,BUTTON_ACTIVE_LOW_PULL_UP)
    const button1: Button;
    //% block="button 2" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D4,BUTTON_ACTIVE_LOW_PULL_UP)
    const button2: Button;
    //% block="button 3" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D1,BUTTON_ACTIVE_LOW_PULL_UP)
    const button3: Button;
    //% block="button 4" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D3,BUTTON_ACTIVE_LOW_PULL_UP)
    const button4: Button;

    //% block="button E0" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D2,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonE0: Button;
    //% block="button E1" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D0,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonE1: Button;
}

