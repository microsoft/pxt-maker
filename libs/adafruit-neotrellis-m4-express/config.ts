namespace config {
    // https://cdn-learn.adafruit.com/assets/assets/000/064/889/original/adafruit_products_mainschem.png?1541024554
    export const PIN_DOTSTAR_DATA = DAL.PB03;
    export const PIN_DOTSTAR_CLOCK = DAL.PB02;
    export const NUM_DOTSTARS = 1;

    export const NUM_NEOPIXELS = 32;
    export const PIN_NEOPIXEL = DAL.PA27;

    export const PIN_SDA = DAL.PA08;
    export const PIN_SCL = DAL.PA09;

    /*
    export const NUM_MATRIX_KEYPAD_ROWS = 4;
    export const PIN_MATRIX_KEYPAD_ROW0 = DAL.PA18;
    export const PIN_MATRIX_KEYPAD_ROW1 = DAL.PA19;
    export const PIN_MATRIX_KEYPAD_ROW2 = DAL.PB22;
    export const PIN_MATRIX_KEYPAD_ROW3 = DAL.PB23;

    export const NUM_MATRIX_KEYPAD_COLS = 8;
    export const PIN_MATRIX_KEYPAD_COL0 = DAL.PA14;
    export const PIN_MATRIX_KEYPAD_COL1 = DAL.PA15;
    export const PIN_MATRIX_KEYPAD_COL2 = DAL.PA16;
    export const PIN_MATRIX_KEYPAD_COL3 = DAL.PA17;
    export const PIN_MATRIX_KEYPAD_COL4 = DAL.PA20;
    export const PIN_MATRIX_KEYPAD_COL5 = DAL.PA21;
    export const PIN_MATRIX_KEYPAD_COL6 = DAL.PA22;
    export const PIN_MATRIX_KEYPAD_COL7 = DAL.PA23;
    */

    export const PIN_A0 = DAL.PA02;
    export const PIN_A1 = DAL.PA05;

    export const PIN_FLASH_MISO = DAL.PA09; // QSPI_DATA[1]
    export const PIN_FLASH_MOSI = DAL.PA08; // QSPI_DATA[0]
    export const PIN_FLASH_SCK = DAL.PB10; // QSPI_SCK
    export const PIN_FLASH_CS = DAL.PB11; // QSPI_CS

    export const PIN_JACK_TX = PIN_SDA;
}
