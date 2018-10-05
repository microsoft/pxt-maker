// Auto-generated. Do not edit.


    /**
     * Functions to operate colored LEDs.
     */
    //% weight=100 color="#0078d7" icon="\uf00a"
declare namespace light {

    /**
     * Get the default pin for the built-in neopixels
     */
    //% parts="neopixel"
    //% help=light/default-pin shim=light::defaultPin
    function defaultPin(): DigitalInOutPin;

    /**
     * Send a neopixel buffer to the specified digital pin
     * @param pin The pin that the neopixels are connected to
     * @param mode the color encoding mode
     * @param buf The buffer to send to the pin
     */
    //% parts="neopixel" shim=light::sendBuffer
    function sendBuffer(pin: DigitalInOutPin, mode: int32, buf: Buffer): void;
}

// Auto-generated. Do not edit. Really.
