// TODO remove pins?
declare namespace pins {
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A0)
    const A0: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A1)
    const A1: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A2)
    const A2: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A3)
    const A3: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A4)
    const A4: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A5)
    const A5: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A6)
    const A6: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A7)
    const A7: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A8)
    const A8: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A9)
    const A9: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A10)
    const A10: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A11)
    const A11: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A12)
    const A12: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A15)
    const A15: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D0)
    const B0: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D1)
    const B1: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D2)
    const B2: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D3)
    const B3: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D4)
    const B4: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D5)
    const B5: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D6)
    const B6: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D7)
    const B7: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D8)
    const B8: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D9)
    const B9: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D10)
    const B10: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D11)
    const B11: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D12)
    const B12: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D13)
    const B13: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D14)
    const B14: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D15)
    const B15: DigitalInOutPin;

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

namespace input {
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
     * Button connecting A8 to GND.
     */
    //% block="button A8" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A8,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA8: Button;   
   
    /**
     * Button connecting A9 to GND.
     */
    //% block="button A9" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A9,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA9: Button;   
   
    /**
     * Button connecting A10 to GND.
     */
    //% block="button A10" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A10,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA10: Button;   
   
    /**
     * Button connecting A11 to GND.
     */
    //% block="button A11" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A11,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA11: Button;   
   
    /**
     * Button connecting A12 to GND.
     */
    //% block="button A12" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A12,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA12: Button;   
   
    /**
     * Button connecting A15 to GND.
     */
    //% block="button A15" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_A15,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonA15: Button;   
   
    /**
     * Button connecting B0 to GND.
     */
    //% block="button B0" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B0,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB0: Button;   
   
    /**
     * Button connecting B1 to GND.
     */
    //% block="button B1" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B1,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB1: Button;   
   
    /**
     * Button connecting B2 to GND.
     */
    //% block="button B2" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B2,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB2: Button;   
   
    /**
     * Button connecting B3 to GND.
     */
    //% block="button B3" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B3,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB3: Button;   
   
    /**
     * Button connecting B4 to GND.
     */
    //% block="button B4" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B4,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB4: Button;   
   
    /**
     * Button connecting B5 to GND.
     */
    //% block="button B5" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B5,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB5: Button;   
   
    /**
     * Button connecting B6 to GND.
     */
    //% block="button B6" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B6,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB6: Button;   
   
    /**
     * Button connecting B7 to GND.
     */
    //% block="button B7" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B7,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB7: Button;   
   
    /**
     * Button connecting B8 to GND.
     */
    //% block="button B8" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B8,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB8: Button;   
   
    /**
     * Button connecting B9 to GND.
     */
    //% block="button B9" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B9,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB9: Button;   
   
    /**
     * Button connecting B10 to GND.
     */
    //% block="button B10" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B10,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB10: Button;   
   
    /**
     * Button connecting B11 to GND.
     */
    //% block="button B11" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B11,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB11: Button;   
   
    /**
     * Button connecting B12 to GND.
     */
    //% block="button B12" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B12,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB12: Button;   
   
    /**
     * Button connecting B13 to GND.
     */
    //% block="button B13" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B13,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB13: Button;   
   
    /**
     * Button connecting B14 to GND.
     */
    //% block="button B14" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B14,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB14: Button;   
   
    /**
     * Button connecting B15 to GND.
     */
    //% block="button B15" fixedInstance
    //% shim=pxt::getButtonByPin(PIN_B15,BUTTON_ACTIVE_LOW_PULL_UP)
    //% parts="buttons"
    const buttonB15: Button;   
}