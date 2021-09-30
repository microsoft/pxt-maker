namespace config {

    export const PIN_LED_R = 11 | DAL.CFG_PIN_CONFIG_ACTIVE_LO;
    export const PIN_LED_G = 13 | DAL.CFG_PIN_CONFIG_ACTIVE_LO;
    export const PIN_LED_B = 15 | DAL.CFG_PIN_CONFIG_ACTIVE_LO;
    // The early setting of this seems to cause crashes - to be investigated
    export const PIN_LED = PIN_LED_B;

    export const PIN_P0 = 0
    export const PIN_P1 = 1
    export const PIN_P2 = 2
    export const PIN_P3 = 3
    export const PIN_P4 = 4
    export const PIN_P5 = 5
    export const PIN_P6 = 6
    export const PIN_P7 = 7
    export const PIN_P8 = 8
    export const PIN_P9 = 9

    export const PIN_P10 = 10
    export const PIN_P11 = 11
    export const PIN_P12 = 12
    export const PIN_P13 = 13
    export const PIN_P14 = 14
    export const PIN_P15 = 15
    export const PIN_P16 = 16
    export const PIN_P17 = 17
    export const PIN_P18 = 18
    export const PIN_P19 = 19

    export const PIN_P20 = 20
    export const PIN_P21 = 21
    export const PIN_P22 = 22
    export const PIN_P23 = 23
    export const PIN_P24 = 24
    export const PIN_P25 = 25
    export const PIN_P26 = 26
    export const PIN_P27 = 27
    export const PIN_P28 = 28
    export const PIN_P29 = 29

    export const PIN_JACK_TX = 9

    export const PIN_JDPWR_OVERLOAD_LED = PIN_LED_R
    export const PIN_JDPWR_ENABLE = 19 | DAL.CFG_PIN_CONFIG_ACTIVE_LO // ILIM_ENABLE
    export const PIN_JDPWR_FAULT = 25 // ILIM_FAULT

    export const BOOTLOADER_BOARD_ID = 0x34b55eab
}
