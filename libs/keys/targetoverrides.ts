namespace keys {
    //% fixedInstance block="left"
    export const left = new Key(1, input.button3.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="up"
    export const up = new Key(2, input.button4.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="right"
    export const right = new Key(3, input.buttonE0.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="down"
    export const down = new Key(4, input.buttonE1.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);

    //% fixedInstance block="A"
    export const A = new Key(1, input.button1.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="B"
    export const B = new Key(2, input.button2.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
}
