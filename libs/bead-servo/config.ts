namespace config {
    export const ACCELEROMETER_TYPE = DAL.ACCELEROMETER_TYPE_LIS3DH;
    export const PIN_ACCELEROMETER_SDA = DAL.PA00;
    export const PIN_ACCELEROMETER_SCL = DAL.PA01;
    export const PIN_ACCELEROMETER_INT = DAL.PA13;

    export const PIN_A0 = DAL.PA02;
    export const PIN_A1 = DAL.PA05;
    export const PIN_A2 = DAL.PA06;
    export const PIN_A3 = DAL.PA07;
    export const PIN_A4 = DAL.PB03;
    export const PIN_A5 = DAL.PB02;

    export const PIN_D2 = PIN_A5;
    export const PIN_D3 = PIN_A4;
    export const PIN_D6 = PIN_A1;
    export const PIN_D9 = PIN_A2;
    export const PIN_D10 = PIN_A3;
    export const PIN_D12 = PIN_A0;
    export const PIN_D13 = DAL.PA17;

    export const PIN_SCL = PIN_A4;
    export const PIN_SDA = PIN_A5;

    export const PIN_LED = PIN_D13;
    export const PIN_RXLED = DAL.PA18;

    export const PIN_JACK_COMMLED = 0x10012; // top bit is active lo flag, 12 is pin 18 (GREEN)
    export const PIN_JACK_BUSLED = 0x10011; // top bit is active lo flag, 11 is pin 17 (RED,D13, LED)

    export const PIN_TX = DAL.PB08;
    export const PIN_JACK_TX = PIN_TX;

}