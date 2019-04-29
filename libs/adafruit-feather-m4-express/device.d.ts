declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: PwmOnlyPin;

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

    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const D0: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const D1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const D2: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const D3: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const D4: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D5)
    const D5: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D6)
    const D6: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D7)
    const D7: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_D8)
    const D8: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D9)
    const D9: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D10)
    const D10: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D11)
    const D11: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D12)
    const D12: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const D13: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_RX)
    const RX: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_TX)
    const TX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_MISO)
    const MISO: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_MOSI)
    const MOSI: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCK)
    const SCK: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCL)
    const SCL: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SDA)
    const SDA: DigitalInOutPin;

    // TODO only checked the following two for Metro M0
    //% fixedInstance shim=pxt::getPin(PIN_RXLED)
    const RXLED: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_TX)
    const TXLED: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_NEOPIXEL)
    const NEOPIXEL: DigitalInOutPin;
}

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
     * Button connecting D0 to GND.
     */
    //% block="button D0" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D0,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD0: Button;

    /**
     * Button connecting D1 to GND.
     */
    //% block="button D1" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D1,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD1: Button;

    /**
     * Button connecting D2 to GND.
     */
    //% block="button D2" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D2,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD2: Button;

    /**
     * Button connecting D3 to GND.
     */
    //% block="button D3" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D3,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD3: Button;

    /**
     * Button connecting D4 to GND.
     */
    //% block="button D4" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D4,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD4: Button;

    /**
     * Button connecting D5 to GND.
     */
    //% block="button D5" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D5,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD5: Button;

    /**
     * Button connecting D6 to GND.
     */
    //% block="button D6" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D6,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD6: Button;

    /**
     * Button connecting D7 to GND.
     */
    //% block="button D7" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D7,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD7: Button;

    /**
     * Button connecting D8 to GND.
     */
    //% block="button D8" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D8,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD8: Button;

    /**
     * Button connecting D9 to GND.
     */
    //% block="button D9" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D9,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD9: Button;

    /**
     * Button connecting D10 to GND.
     */
    //% block="button D10" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D10,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD10: Button;

    /**
     * Button connecting D11 to GND.
     */
    //% block="button D11" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D11,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD11: Button;

    /**
     * Button connecting D12 to GND.
     */
    //% block="button D12" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_D12,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonD12: Button;
}