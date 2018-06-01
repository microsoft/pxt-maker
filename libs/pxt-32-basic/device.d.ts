declare namespace pins {
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
    //% shim=pxt::getButtonByPin(PIN_BTN_A,BUTTON_ACTIVE_LOW_PULL_UP)
    const button1: Button; // A
    //% block="button 2" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_BTN_B,BUTTON_ACTIVE_LOW_PULL_UP)
    const button2: Button; // B
    //% block="button 3" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_BTN_LEFT,BUTTON_ACTIVE_LOW_PULL_UP)
    const button3: Button; // L
    //% block="button 4" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_BTN_RIGHT,BUTTON_ACTIVE_LOW_PULL_UP)
    const button4: Button; // R

    //% block="button E0" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_BTN_UP,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonE0: Button; // U
    //% block="button E1" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_BTN_DOWN,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonE1: Button; // D
}

