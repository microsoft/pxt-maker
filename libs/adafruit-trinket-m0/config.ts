
namespace config {
    export const PIN_DOTSTAR_DATA = DAL.PA00;
    export const PIN_DOTSTAR_CLOCK = DAL.PA01;
    export const NUM_DOTSTARS = 1;

    export const PIN_D0 = DAL.PA08;
    export const PIN_D1 = DAL.PA02;
    export const PIN_D2 = DAL.PA09;
    export const PIN_D3 = DAL.PA07;
    export const PIN_D4 = DAL.PA06;

    export const PIN_A4 = DAL.PA08;
    export const PIN_A0 = DAL.PA02;
    export const PIN_A1 = DAL.PA09;
    export const PIN_A3 = DAL.PA07;
    export const PIN_A2 = DAL.PA06;

    export const PIN_D13 = DAL.PA10;
    export const PIN_LED = DAL.PA10;
    export const PIN_SDA = DAL.PA08;
    export const PIN_SCL = DAL.PA09;
    export const PIN_SCK = DAL.PA07;
    export const PIN_MISO = DAL.PA09;
    export const PIN_MOSI = DAL.PA06;
    export const PIN_RX = DAL.PA07;
    export const PIN_TX = DAL.PA06;

    // not supported
    // export const PIN_JACK_TX = DAL.PA06; // TX

    export const PIN_ACCELEROMETER_INT = DAL.PA02; // D1
    export const PIN_ACCELEROMETER_SCL = DAL.PA09; // SCL
    export const PIN_ACCELEROMETER_SDA = DAL.PA08; // SDA
    
    export const PIN_DISPLAY_CS = PIN_A2;
    export const PIN_DISPLAY_SCK = PIN_SCK;
    export const PIN_DISPLAY_MOSI = PIN_MOSI;
    export const PIN_DISPLAY_DC = PIN_A3;
    export const PIN_DISPLAY_RST = PIN_A4;
    export const PIN_DISPLAY_MISO = PIN_MISO;
    // export const PIN_DISPLAY_BL = PIN_D4; plugged to power
    export const DISPLAY_CFG0 = 0x00000090;
    export const DISPLAY_CFG1 = 0x000e14ff;
    export const DISPLAY_CFG2 = 24;
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;    
}
