declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_LED_RED)
    const PIN_LED_RED: DigitalInOutPin;
	//% fixedInstance shim=pxt::getPin(PIN_LED_RED)
    const PIN_LED_GREEN: DigitalInOutPin;
	//% fixedInstance shim=pxt::getPin(PIN_LED_RED)
    const PIN_LED_BLUE: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_RX)
    const RX: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_TX)
    const TX: DigitalInOutPin;
	//% fixedInstance shim=pxt::getPin(PIN_TX)
    const SD_CS: DigitalInOutPin;
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
    //% fixedInstance shim=pxt::getPin(PIN_TXLED)
    const TXLED: DigitalInOutPin;
}