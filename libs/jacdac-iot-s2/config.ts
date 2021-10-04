namespace config {
    export const PIN_P0 = 0
    export const PIN_P1 = 1
    export const PIN_P2 = 2
    export const PIN_P3 = 3
    export const PIN_P4 = 4
    export const PIN_P5 = 5
    export const PIN_P12 = 12
    export const PIN_P13 = 13
    export const PIN_P14 = 14
    export const PIN_P15 = 15
    export const PIN_P16 = 16
    export const PIN_P17 = 17
    export const PIN_P18 = 18
    export const PIN_P19 = 19
    export const PIN_P21 = 21
    export const PIN_P22 = 22
    export const PIN_P23 = 23
    export const PIN_P25 = 25
    export const PIN_P26 = 26
    export const PIN_P27 = 27
    /*
    export const PIN_P32 = 32
    export const PIN_P33 = 33
    export const PIN_P34 = 34
    export const PIN_P35 = 35
    export const PIN_P36 = 36
    export const PIN_P39 = 39
    export const PIN_P40 = 40
    export const PIN_P41 = 41
    export const PIN_P42 = 42
    export const PIN_P43 = 43
    export const PIN_P44 = 44
    export const PIN_P45 = 45
    export const PIN_P46 = 46
    */

    export const PIN_JACK_TX = PIN_P17

    export const PIN_LED_R = 8 | DAL.CFG_PIN_CONFIG_ACTIVE_LO
    export const PIN_LED_G = 7 | DAL.CFG_PIN_CONFIG_ACTIVE_LO
    export const PIN_LED_B = 6 | DAL.CFG_PIN_CONFIG_ACTIVE_LO
    export const PIN_LED = PIN_LED_G

    export const PIN_JDPWR_OVERLOAD_LED = PIN_LED_R | DAL.CFG_PIN_CONFIG_ACTIVE_LO
    export const PIN_JDPWR_ENABLE = PIN_P2 | DAL.CFG_PIN_CONFIG_ACTIVE_LO // ILIM_ENABLE
    export const PIN_JDPWR_FAULT = PIN_P13 // ILIM_FAULT

    export const BOOTLOADER_BOARD_ID = 0x3a9b6daf

    // PIN_P3 is for 500/900mA switch

}
