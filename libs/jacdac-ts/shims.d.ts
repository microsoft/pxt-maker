// Auto-generated. Do not edit.
declare namespace jacdac {

    /**
     * Gets the physical layer component id
     **/
    //% shim=jacdac::__physId
    function __physId(): int32;

    /**
     * Write a buffer to the jacdac physical layer.
     **/
    //% shim=jacdac::__physSendPacket
    function __physSendPacket(buf: Buffer): void;

    /**
     * Reads a packet from the queue. NULL if queue is empty
     **/
    //% shim=jacdac::__physGetPacket
    function __physGetPacket(): Buffer;

    /**
     * Returns the connection state of the JACDAC physical layer.
     **/
    //% shim=jacdac::__physIsConnected
    function __physIsConnected(): boolean;
}

// Auto-generated. Do not edit. Really.
