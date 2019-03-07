// Auto-generated. Do not edit.
declare namespace network {

    /**
     * Send data over IR.
     */
    //% parts="ir" shim=network::infraredSendPacket
    function infraredSendPacket(buf: Buffer): void;

    /**
     * Get most recent packet received over IR.
     */
    //% parts="ir" shim=network::infraredPacket
    function infraredPacket(): Buffer;

    /**
     * Run action after a packet is recieved over IR.
     */
    //% parts="ir" shim=network::onInfraredPacket
    function onInfraredPacket(body: () => void): void;

    /**
     * Run action after there's an error recieving packet over IR.
     */
    //% shim=network::onInfraredError
    function onInfraredError(body: () => void): void;
}

// Auto-generated. Do not edit. Really.
