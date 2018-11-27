// Auto-generated. Do not edit.
declare namespace network {

    /**
     * Send data over cable.
     */
    //% parts="cable" shim=network::cableSendPacket
    function cableSendPacket(buf: Buffer): void;

    /**
     * Get most recent packet received over cable.
     */
    //% parts="cable" shim=network::cablePacket
    function cablePacket(): Buffer;

    /**
     * Run action after a packet is recieved over cable.
     */
    //% parts="cable" shim=network::onCablePacket
    function onCablePacket(body: () => void): void;

    /**
     * Run action after there's an error reciving packet over cable.
     */
    //% shim=network::onCableError
    function onCableError(body: () => void): void;
}

// Auto-generated. Do not edit. Really.
