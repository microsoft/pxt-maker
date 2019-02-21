namespace config {
    export const PIN_NEOPIXEL = DAL.PB22;
    export const NUM_NEOPIXELS = 1;

    export const PIN_A0 = DAL.PA02;
    export const PIN_A1 = DAL.PA05;
    export const PIN_A2 = DAL.PA06;
    export const PIN_A3 = DAL.PA04;
    export const PIN_A4 = DAL.PB08;
    export const PIN_A5 = DAL.PB09;

    export const PIN_D0 = DAL.PA23;
    export const PIN_D1 = DAL.PA22;
    export const PIN_D2 = DAL.PB17;
    export const PIN_D3 = DAL.PB16;
    export const PIN_D4 = DAL.PB13;
    export const PIN_D5 = DAL.PB14;
    export const PIN_D6 = DAL.PB15;
    export const PIN_D7 = DAL.PB12;
    export const PIN_D8 = DAL.PA21;
    export const PIN_D9 = DAL.PA20;
    export const PIN_D10 = DAL.PA18;
    export const PIN_D11 = DAL.PA19;
    export const PIN_D12 = DAL.PA17;
    export const PIN_D13 = DAL.PA16;
    export const PIN_LED = DAL.PA16; // D13
    export const PIN_RX = PIN_D0;
    export const PIN_TX = PIN_D1;
    export const PIN_MISO = DAL.PA14;
    export const PIN_MOSI = DAL.PA12;
    export const PIN_SCK = DAL.PA13;
    export const PIN_SCL = DAL.PB03;
    export const PIN_SDA = DAL.PB02;
    export const PIN_RXLED = DAL.PB06;
    export const PIN_TXLED = DAL.PA27;

    export const PIN_FLASH_MISO = DAL.PA09; // FLASH_IO1
    export const PIN_FLASH_MOSI = DAL.PA08; // FLASH_IO0
    export const PIN_FLASH_SCK = DAL.PB10;
    export const PIN_FLASH_CS = DAL.PB11;

    export const PIN_JACK_TX = PIN_TX;
    export const PIN_JACK_COMMLED = PIN_TXLED;

    export const PIN_DISPLAY_CS = PIN_A2;
    export const PIN_DISPLAY_SCK = PIN_SCK;
    export const PIN_DISPLAY_MOSI = PIN_MOSI;
    export const PIN_DISPLAY_DC = PIN_A3; // A3
    export const PIN_DISPLAY_RST = PIN_A5; // A4
    export const PIN_DISPLAY_MISO = PIN_MISO;
    // export const PIN_DISPLAY_BL = PIN_D4; plugged to power
    export const DISPLAY_CFG0 = 0x00000090;
    export const DISPLAY_CFG1 = 0x000e14ff;
    export const DISPLAY_CFG2 = 24;
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;
}
