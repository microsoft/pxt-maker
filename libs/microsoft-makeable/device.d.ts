declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_LED_R)
    const LED_R: DigitalInOutPin; // red
    //% fixedInstance shim=pxt::getPin(PIN_LED_G)
    const LED_G: DigitalInOutPin; // green
    //% fixedInstance shim=pxt::getPin(PIN_LED_B)
    const LED_B: DigitalInOutPin; // blue

    //% fixedInstance shim=pxt::getPin(PIN_A0)
    const A0: PwmPin;
}