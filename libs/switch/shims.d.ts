// Auto-generated. Do not edit.
declare namespace input {

    /**
     * Do something when the slide switch is moved left or right.
     * @param direction the direction the switch must be moved to trigger the event
     */
    //% help=input/on-switch-moved
    //% blockId=device_on_switch_moved block="on switch moved %direction"
    //% parts="switch"
    //% weight=80 shim=input::onSwitchMoved
    function onSwitchMoved(direction: SwitchDirection, handler: () => void): void;

    /**
     * Gets a value indicating if the switch is positioned to the right
     */
    //% blockId=device_switch_direction block="switch right"
    //% parts="switch"
    //% group="Switch" weight=10 blockGap=8 shim=input::switchRight
    function switchRight(): boolean;
}

// Auto-generated. Do not edit. Really.
