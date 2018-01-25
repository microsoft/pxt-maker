// Auto-generated. Do not edit.
declare namespace gamepad {

    /** 
     * Sets the button state to down
     */
    //% help=gamepad/set-button
    //% blockId=joystickSetButton block="gamepad button %index=joystickStandardButton|%down"
    //% down.fieldEditor=toggleupdown shim=gamepad::setButton
    function setButton(index: int32, down: boolean): void;

    /**
     * Sets the current move on the gamepad
     **/
    //% help=gamepad/move
    //% index.min=0 index.max=1 shim=gamepad::move
    function move(index: int32, x: int32, y: int32): void;

    /** 
     * Sets the throttle state
     */
    //% gamepad/set-throttle blockHidden=1
    //% index.min=0 index.max=1
    //% value.min=0 value.max=31 shim=gamepad::setThrottle
    function setThrottle(index: int32, value: int32): void;
}

// Auto-generated. Do not edit. Really.
