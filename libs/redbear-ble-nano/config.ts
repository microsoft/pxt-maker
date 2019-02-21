
namespace config {
    // https://github.com/redbear/nRF5x/tree/master/nRF52832
    export const PIN_D0 = DAL.P0_30;
    export const PIN_D1 = DAL.P0_29;
    export const PIN_D2 = DAL.P0_28;
    export const PIN_D3 = DAL.P0_2;
    export const PIN_D4 = DAL.P0_5;
    export const PIN_D5 = DAL.P0_4;

    export const PIN_A0 = PIN_D0;
    export const PIN_A1 = PIN_D1;
    export const PIN_A2 = PIN_D2;
    export const PIN_A3 = PIN_D3;
    export const PIN_A4 = PIN_D4;
    export const PIN_A5 = PIN_D5;

    export const PIN_D13 = DAL.P0_11;
    export const PIN_LED = PIN_D13;

    export const PIN_SDA = PIN_D2;
    export const PIN_SCL = PIN_D3;

    export const PIN_SCK = PIN_D3;
    export const PIN_MISO = PIN_D0;
    export const PIN_MOSI = PIN_D1;

    export const PIN_RX = PIN_D0;
    export const PIN_TX = PIN_D1;

    export const PIN_JACK_TX = PIN_TX;
}