// Auto-generated. Do not edit.


declare interface TouchButton {
    /**
     * Manually define the threshold use to detect a touch event. Any sensed value equal to or greater than this value will be interpreted as a touch.
     * @param name button name
     * @param threshold minimum value to consider a touch eg:200
     */
    //% blockId=touch_set_threshold block="button %button|set threshold %threshold"
    //% blockNamespace=input
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4
    //% group="More" weight=16 blockGap=8
    //% help=input/touch/set-threshold shim=TouchButtonMethods::setThreshold
    setThreshold(threshold: int32): void;

    /**
     * Reads the current value registered with the button.
     * @param name button name
     */
    //% blockId=touch_value block="button %button|value"
    //% blockNamespace=input
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4
    //% group="More" weight=49 blockGap=8
    //% help=input/touch/value shim=TouchButtonMethods::value
    value(): int32;
}


declare interface AnalogPin {
    /**
     * Get the cap-touch sensor for given pin (if available)
     */
    //% shim=AnalogPinMethods::touchButton
    touchButton(): TouchButton;
}

// Auto-generated. Do not edit. Really.
