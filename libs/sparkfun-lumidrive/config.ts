namespace config {

    export const PIN_A3 = DAL.PA04;
    export const PIN_A4 = DAL.PA05;

    export const PIN_D6 = DAL.PA20;
    export const PIN_D8 = DAL.PA06;
    export const PIN_D9 = DAL.PA07;

    export const PIN_D13 = DAL.PA17;

    export const PIN_LED = PIN_D13;

    export const PIN_DOTSTAR_DATA = DAL.PA18; // LED_MOSI
    export const PIN_DOTSTAR_CLOCK = DAL.PA19;
    export const NUM_DOTSTARS = 30;

    export const PIN_JACK_TX = PIN_A3;

    export const PIN_FLASH_MISO = DAL.PA14;
    export const PIN_FLASH_MOSI = DAL.PA08;
    export const PIN_FLASH_SCK = DAL.PA09;
    export const PIN_FLASH_CS = DAL.PA13;
}
