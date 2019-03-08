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
    export const PIN_D6 = DAL.PA20;
    export const PIN_D7 = DAL.PA21;
    export const PIN_D8 = DAL.PA16;
    export const PIN_D9 = DAL.PA17;
    export const PIN_D10 = DAL.PA19;
    export const PIN_D11 = DAL.PA08;
    export const PIN_D12 = DAL.PA09;
    export const PIN_D13 = DAL.PB23;
    export const PIN_D14 = DAL.PB22;

    export const PIN_LED = PIN_D6;
    export const PIN_SDA = PIN_D11;
    export const PIN_SCL = PIN_D12;
    export const PIN_RX = PIN_D13;
    export const PIN_TX = PIN_D14;

    export const PIN_MISO = PIN_D10;
    export const PIN_SCK = PIN_D9;  
    export const PIN_MOSI = PIN_D8;

    //Module LORA
    //export const PIN_A9 = DAL.PB08;   // ADC Battery
    export const PIN_LORA_MISO = DAL.PA15;    
    export const PIN_LORA_SCK = DAL.PA13;
    export const PIN_LORA_MOSI = DAL.PA12;
    export const PIN_LORA_CS = DAL.PA14;
    export const PIN_LORA_BOOT = DAL.PB09;
    export const PIN_LORA_RESET = DAL.PA27;
    
    export const PIN_JACK_TX = PIN_TX;
    export const PIN_JACK_COMMLED = PIN_LED;

    export const PIN_LCD_RESET = PIN_D7;
    export const PIN_LCD_ENABLE = PIN_D8;
    export const PIN_LCD_DATALINE4 = PIN_D9;
    export const PIN_LCD_DATALINE5 = PIN_D10;
    export const PIN_LCD_DATALINE6 = PIN_D11;
    export const PIN_LCD_DATALINE7 = PIN_D12;
}
