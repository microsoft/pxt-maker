namespace config {

    export const PIN_SDA = DAL.PA00;
    export const PIN_SCL = DAL.PA01;

    export const PIN_D13 = DAL.PA17;
    export const PIN_TX = DAL.PB08;

    export const PIN_LED = PIN_D13;
    export const PIN_RXLED = DAL.PA18;

    export const PIN_JACK_COMMLED = 0x10012; // top bit is active lo flag, 12 is pin 18 (GREEN)
    export const PIN_JACK_BUSLED = 0x10011; // top bit is active lo flag, 11 is pin 17 (RED,D13, LED)

    export const PIN_JACK_TX = PIN_TX;

}