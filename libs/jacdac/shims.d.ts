// Auto-generated. Do not edit.


declare interface JacDacDriverStatus {
    /** Check if driver is a virtual driver. */
    //% property shim=JacDacDriverStatusMethods::isVirtualDriver
    isVirtualDriver: boolean;

    /** Check if device is paired. */
    //% property shim=JacDacDriverStatusMethods::isPaired
    isPaired: boolean;

    /** Check if driver is paired. */
    //% property shim=JacDacDriverStatusMethods::isPairedDriver
    isPairedDriver: boolean;

    /** Check if driver is connected. */
    //% property shim=JacDacDriverStatusMethods::isConnected
    isConnected: boolean;

    /** Get device class. */
    //% property shim=JacDacDriverStatusMethods::driverClass
    driverClass: uint32;

    /** Get device class. */
    //% property shim=JacDacDriverStatusMethods::address
    address: uint8;

    /** Get device id for events. */
    //% property shim=JacDacDriverStatusMethods::id
    id: boolean;
}

// Auto-generated. Do not edit. Really.
