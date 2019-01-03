// Auto-generated. Do not edit.
declare namespace serial {

    /**
     * Sets the size of the RX buffer in bytes
     */
    //% help=serial/set-rx-buffer-size
    //% blockId=serialsetrxbuffersize block="serial set rx buffer size to $size"
    //% weight=10
    //% group="Configuration" shim=serial::setRxBufferSize
    function setRxBufferSize(size: uint8): void;

    /**
     * Sets the size of the TX buffer in bytes
     */
    //% help=serial/set-tx-buffer-size
    //% blockId=serialsettxbuffersize block="serial set tx buffer size to $size"
    //% weight=9
    //% group="Configuration" shim=serial::setTxBufferSize
    function setTxBufferSize(size: uint8): void;

    /**
     * Reads a single byte from the serial receive buffer. Negative if error.
     */
    //% Group="Read" shim=serial::read
    function read(): int32;

    /**
     * Read the buffered received data as a buffer
     */
    //% help=serial/read-buffer
    //% blockId=serial_read_buffer block="serial|read buffer"
    //% weight=17
    //% group="Read" shim=serial::readBuffer
    function readBuffer(): Buffer;

    /**
     * Send a buffer across the serial connection.
     */
    //% help=serial/write-buffer weight=6
    //% blockId=serial_writebuffer block="serial|write buffer %buffer"
    //% group="Write" shim=serial::writeBuffer
    function writeBuffer(buffer: Buffer): void;

    /**
    Sends the console message through the TX, RX pins
     **/
    //% blockId=serialsendtoconsole block="serial attach to console"
    //% group="Configuration" shim=serial::attachToConsole
    function attachToConsole(): void;

    /**
    Set the baud rate of the serial port
     */
    //% help=serial/set-baud-rate
    //% group="Configuration" shim=serial::setBaudRate
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
    //% blockGap=8 inlineInputMode=inline
    //% group="Configuration" shim=serial::redirect
    function redirect(tx: DigitalInOutPin, rx: DigitalInOutPin, rate: BaudRate): void;

    /**
     * Registers code when a delimiter is received
     **/
    //% weight=10
    //% help=serial/on-delimiter-received
    //% blockId=serial_ondelimiter block="serial on delimiter $delimiter received"
    //% blockGap=8
    //% group="Events" shim=serial::onDelimiterReceived
    function onDelimiterReceived(delimiter: Delimiters, handler: () => void): void;

    /**
     * Registers code when serial events happen
     **/
    //% weight=9
    //% help=serial/on-event
    //% blockId=serial_onevent block="serial on %event"
    //% blockGap=8
    //% group="Events" shim=serial::onEvent
    function onEvent(event: SerialEvent, handler: () => void): void;
}

// Auto-generated. Do not edit. Really.
