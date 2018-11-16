// Auto-generated. Do not edit.
declare namespace serial {

    /**
     * Read the buffered received data as a string
     */
    //% help=serial/read-string
    //% blockId=serial_read_buffer block="serial|read string"
    //% weight=18 shim=serial::readString
    function readString(): string;

    /**
     * Write some text to the serial port.
     */
    //% help=serial/write-string
    //% weight=87
    //% blockId=serial_writestring block="serial|write string %text"
    //% blockHidden=1 shim=serial::writeString
    function writeString(text: string): void;

    /**
     * Send a buffer across the serial connection.
     */
    //% help=serial/write-buffer weight=6
    //% blockId=serial_writebuffer block="serial|write buffer %buffer" shim=serial::writeBuffer
    function writeBuffer(buffer: Buffer): void;

    /**
    Sends the console message through the TX, RX pins
     **/
    //% blockId=serialsendtoconsole block="serial attach to console" shim=serial::attachToConsole
    function attachToConsole(): void;

    /**
    Set the baud rate of the serial port
     */
    //% help=serial/set-baud-rate shim=serial::setBaudRate
    function setBaudRate(rate: BaudRate): void;

    /**
     * Set the serial input and output to use pins instead of the USB connection.
     * @param tx the new transmission pin
     * @param rx the new reception pin
     * @param rate the new baud rate
     */
    //% weight=10
    //% help=serial/redirect
    //% blockId=serial_redirect block="serial|redirect to|TX %tx|RX %rx"
    //% tx.fieldEditor="gridpicker" tx.fieldOptions.columns=3
    //% tx.fieldOptions.tooltips="false"
    //% rx.fieldEditor="gridpicker" rx.fieldOptions.columns=3
    //% rx.fieldOptions.tooltips="false"
    //% blockGap=8 inlineInputMode=inline shim=serial::redirect
    function redirect(tx: DigitalInOutPin, rx: DigitalInOutPin, rate: BaudRate): void;
}

// Auto-generated. Do not edit. Really.
