// Auto-generated. Do not edit.
declare namespace serial {

    /**
     * Opens a Serial communication driver
     */
    //% parts=serial shim=serial::createSerial
    function createSerial(tx: DigitalInOutPin, rx: DigitalInOutPin, id: int32): SerialDevice;
}


declare interface SerialDevice {
    /**
     * Sets the size of the RX buffer in bytes
     */
    //% shim=SerialDeviceMethods::setRxBufferSize
    setRxBufferSize(size: uint8): void;

    /**
     * Sets the size of the TX buffer in bytes
     */
    //% shim=SerialDeviceMethods::setTxBufferSize
    setTxBufferSize(size: uint8): void;

    /**
    Set the baud rate of the serial port
     */
    //% shim=SerialDeviceMethods::setBaudRate
    setBaudRate(rate: BaudRate): void;

    /**
     * Reads a single byte from the serial receive buffer. Negative if error, 0 if no data.
     */
    //% shim=SerialDeviceMethods::read
    read(): int32;

    /**
     * Read the buffered received data as a buffer
     */
    //% shim=SerialDeviceMethods::readBuffer
    readBuffer(): Buffer;

    /**
     * Send a buffer across the serial connection.
     */
    //% shim=SerialDeviceMethods::writeBuffer
    writeBuffer(buffer: Buffer): void;

    /**
     */
    //% shim=SerialDeviceMethods::redirect
    redirect(tx: DigitalInOutPin, rx: DigitalInOutPin, rate: BaudRate): void;

    /**
     * Register code when a serial event occurs
     */
    //% shim=SerialDeviceMethods::onEvent
    onEvent(event: SerialEvent, handler: () => void): void;
}
declare namespace serial {

    /**
     * Gets the default serial interface if any
     */
    //% shim=serial::device
    function device(): SerialDevice;

    /**
     * Registers code when a delimiter is received
     **/
    //% weight=10
    //% help=serial/on-delimiter-received
    //% blockId=serial_ondelimiter block="serial on delimiter $delimiter received"
    //% blockGap=8
    //% group="Events" shim=serial::onDelimiterReceived
    function onDelimiterReceived(delimiter: Delimiters, handler: () => void): void;
}

// Auto-generated. Do not edit. Really.
