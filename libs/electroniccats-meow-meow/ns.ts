
//% color="#d65cd6"
namespace input {
}

//% color="#F55D3E"
namespace music {

}

//% color="#00b295"
namespace control {

}

//% color="#EF2D56" advanced=false
namespace pins {

}

//% color="#006E90"
namespace serial {

}

//% color="#40bf4a"
namespace loops {

}

namespace servos {
    /**
     * A micro servo controlled from pin A6
     */
    //% fixedInstance whenUsed block="servo A6"
    export const A6 = new servos.PinServo(pins.A6);
}