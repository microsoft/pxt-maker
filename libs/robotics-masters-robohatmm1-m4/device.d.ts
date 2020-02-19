declare namespace pins {

    //% fixedInstance shim=pxt::getPin(PIN_RCC1)
    const RCC1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_RCC2)
    const RCC2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_RCC3)
    const RCC3: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_RCC4)
    const RCC4: PwmPin;

    //% fixedInstance shim=pxt::getPin(PIN_SERVO1)
    const SERVO1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO2)
    const SERVO2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO3)
    const SERVO3: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO4)
    const SERVO4: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO5)
    const SERVO5: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO6)
    const SERVO6: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO7)
    const SERVO7: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_SERVO8)
    const SERVO8: PwmPin;

    //% fixedInstance shim=pxt::getPin(PIN_GROVE0)
    const GROVE0: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_GROVE1)
    const GROVE1: PwmPin;

    //% fixedInstance shim=pxt::getPin(PIN_NEOPIXEL)
    const NEOPIXEL: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_PI_RX)
    const PI_RX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_PI_TX)
    const PI_TX: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_SDA)
    const SDA: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCL)
    const SCL: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_GPS_RX)
    const GPS_RX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_GPS_TX)
    const GPS_TX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_GPS_SDA)
    const GPS_SDA: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_GPS_SCL)
    const GPS_SCL: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_MISO)
    const MISO: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_MOSI)
    const MOSI: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCK)
    const SCK: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SS)
    const SS: PwmPin;

    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: PwmOnlyPin;

}

declare namespace input {
    /**
     * Left button.
     */
    //% indexedInstanceNS=input indexedInstanceShim=pxt::getButton
    //% block="button A" weight=95 fixedInstance
    //% shim=pxt::getButton(BTN_A)
    const buttonA: Button;
}
