// Analog Pins, all SAMD21: PA02-PA11 PB00-PB09 (some pins not connected)
// Touch Pins PA02-PA07 PB02-PB09

namespace config {

    export const PIN_A0 = DAL.PA02;
    export const PIN_A1 = DAL.PB02;
    export const PIN_A2 = DAL.PB03;
    export const PIN_A3 = DAL.PA04;
    export const PIN_A4 = DAL.PA05;
    export const PIN_A5 = DAL.PA06;
    export const PIN_A6 = DAL.PA07;

    export const PIN_D0 = DAL.PA22;
    export const PIN_D1 = DAL.PA23;
    export const PIN_D2 = DAL.PA10;
    export const PIN_D3 = DAL.PA11;
    export const PIN_D4 = DAL.PB10;
    export const PIN_D5 = DAL.PB11;
    export const PIN_D6 = DAL.PA20;  // LED
    export const PIN_D7 = DAL.PA21;
    export const PIN_D8 = DAL.PA16;
    export const PIN_D9 = DAL.PA17;
    export const PIN_D10 = DAL.PA19;
    export const PIN_D11 = DAL.PA08;  // SDA
    export const PIN_D12 = DAL.PA09;  // SCL
    export const PIN_D13 = DAL.PB23;
    export const PIN_D14 = DAL.PB22;
    export const PIN_LED = DAL.PA20;

    export const PIN_SDA = PIN_D11;  // SDA
    export const PIN_SCL = PIN_D12;  // SCL
    export const PIN_RX = PIN_D13; // RX
    export const PIN_TX = PIN_D14; // TX

    //Module LORA
    export const PIN_D15 = DAL.PB09;  // NINA RESETN
    export const PIN_A7 = DAL.PA27;   // NINA GPIO_0
    export const PIN_A8 = DAL.PA14;   // NINA CS
    export const PIN_A9 = DAL.PB08;   // ADC VBAT Battery
    export const PIN_MISO = DAL.PA15;  // NINA MOSI
    export const PIN_SCK = DAL.PA13;   // NINA SCK
    export const PIN_MOSI = DAL.PA12;  // NINA MISO
    
    export const PIN_JACK_TX = PIN_TX;
    export const PIN_JACK_COMMLED = PIN_LED;
}
