declare namespace pins {
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_LED)
    const LED: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SDA)
    const SDA: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCL)
    const SCL: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCK)
    const SCK: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MISO)
    const MISO: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MOSI)
    const MOSI: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_RX)
    const RX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_TX)
    const TX: DigitalInOutPin;
}

declare namespace input {
    //% block="button 1" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_A,BUTTON_ACTIVE_LOW_PULL_UP)
    const button1: Button; // A
    //% block="button 2" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_B,BUTTON_ACTIVE_LOW_PULL_UP)
    const button2: Button; // B
    //% block="button 3" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_LEFT,BUTTON_ACTIVE_LOW_PULL_UP)
    const button3: Button; // L
    //% block="button 4" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_RIGHT,BUTTON_ACTIVE_LOW_PULL_UP)
    const button4: Button; // R

    //% block="button E0" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_UP,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonE0: Button; // U
    //% block="button E1" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_DOWN,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonE1: Button; // D
}

