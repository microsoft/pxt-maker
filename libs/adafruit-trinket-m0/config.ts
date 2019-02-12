
namespace config {
    export const PIN_DOTSTAR_DATA = DAL.PA00;
    export const PIN_DOTSTAR_CLOCK = DAL.PA01;
    export const NUM_DOTSTARS = 1;

    export const PIN_D0 = DAL.PA08;
    export const PIN_D1 = DAL.PA02;
    export const PIN_D2 = DAL.PA09;
    export const PIN_D3 = DAL.PA07;
    export const PIN_D4 = DAL.PA06;
    export const PIN_D13 = DAL.PA10;

    export const PIN_A0 = PIN_D1;
    export const PIN_A1 = PIN_D2;
    export const PIN_A3 = PIN_D3;
    export const PIN_A2 = PIN_D4;
    export const PIN_A4 = PIN_D0;

    export const PIN_LED = DAL.PA10;

    export const PIN_SDA = PIN_D0;
    export const PIN_SCL = PIN_D2;

    export const PIN_SCK = PIN_D3;
    export const PIN_MISO = PIN_D2;
    export const PIN_MOSI = PIN_D4;

    export const PIN_RX = PIN_D3;
    export const PIN_TX = PIN_D4;

    // not supported
    export const PIN_JACK_TX = PIN_TX;

    export const PIN_ACCELEROMETER_INT = PIN_D1;
    export const PIN_ACCELEROMETER_SCL = PIN_D2;
    export const PIN_ACCELEROMETER_SDA = PIN_D0;
}
