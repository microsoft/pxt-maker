// Auto-generated. Do not edit.
declare namespace mouse {

    /** 
     * Sets the mouse button state to down
     */
    //% help=mouse/set-button
    //% blockId=mouseSetButton block="mouse button %index=joystickStandardButton|%down=toggleDownUp" shim=mouse::setButton
    function setButton(button: MouseButton, down: boolean): void;

    /**
     * Moves the mouse
     **/
    //% help=mouse/move
    //% blockId=mouseMove block="mouse move x %x|y %y"
    //% x.min=-128 x.max=127
    //% y.min=-128 y.max=127 shim=mouse::move
    function move(x: int32, y: int32): void;

    /**
     * Moves the mouse
     **/
    //% help=mouse/wheel
    //% blockId=mouseWheel block="turn wheel %w"
    //% w.min=-128 w.max=127 shim=mouse::turnWheel
    function turnWheel(w: int32): void;
}

// Auto-generated. Do not edit. Really.
