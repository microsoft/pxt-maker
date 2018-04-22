// Auto-generated. Do not edit.
declare namespace keyboard {

    /**
     * Sends a sequence of keystrokes to the keyboard
     */
    //% blockId=keyboardType block="keyboard type %text"
    //% blockGap=8 weight=100 shim=keyboard::type
    function type(text: string): void;

    /**
     * Sends a media key command
     */
    //% blockId=keyboardStandardKey block="keyboard key %key|%event"
    //% blockGap=8 weight=99 shim=keyboard::key
    function key(key: string, event: KeyboardKeyEvent): void;

    /**
     * Sends a media key command
     */
    //% blockId=keyboardMediaKey block="keyboard media key %key|%event"
    //% blockGap=8 shim=keyboard::mediaKey
    function mediaKey(key: KeyboardMediaKey, event: KeyboardKeyEvent): void;

    /**
     *
     */
    //% blockId=keyboardFunctionKey block="keyboard function key %key|%event"
    //% blockGap=8 shim=keyboard::functionKey
    function functionKey(key: KeyboardFunctionKey, event: KeyboardKeyEvent): void;
}

// Auto-generated. Do not edit. Really.
