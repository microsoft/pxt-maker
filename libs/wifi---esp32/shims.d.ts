// Auto-generated. Do not edit.
declare namespace _wifi {

    /** Allocate new socket. */
    //% shim=_wifi::socketAlloc
    function socketAlloc(): int32;

    /** Connect with TLS */
    //% promise shim=_wifi::socketConnectTLS
    function socketConnectTLS(fd: int32, host: string, port: int32): int32;

    /** Write to socket */
    //% promise shim=_wifi::socketWrite
    function socketWrite(fd: int32, data: Buffer): int32;

    /** Read from a socket; the return type is really number|Buffer */
    //% promise shim=_wifi::socketRead
    function socketRead(fd: int32, size: int32): int32;

    /** See how many bytes are available for reading */
    //% shim=_wifi::socketBytesAvailable
    function socketBytesAvailable(fd: int32): int32;

    /** Close the socket if open */
    //% shim=_wifi::socketClose
    function socketClose(fd: int32): int32;
}
declare namespace _wifi {

    /** Get ID used in events. */
    //% shim=_wifi::eventID
    function eventID(): int32;

    /** Start a WiFi network scan. */
    //% shim=_wifi::scanStart
    function scanStart(): void;

    /** Get the results of the scan if any. */
    //% shim=_wifi::scanResults
    function scanResults(): Buffer;

    /** Initiate connection. */
    //% shim=_wifi::connect
    function connect(ssid: string, pass: string): int32;

    /** Initiate disconnection. */
    //% shim=_wifi::disconnect
    function disconnect(): int32;

    /** Check if connected. */
    //% shim=_wifi::isConnected
    function isConnected(): boolean;

    /** Return ipv4 address, netmask, and gateway. */
    //% shim=_wifi::ipInfo
    function ipInfo(): Buffer;

    /** Get RSSI of current connection or -128 when not connected. */
    //% shim=_wifi::rssi
    function rssi(): int32;
}

// Auto-generated. Do not edit. Really.
