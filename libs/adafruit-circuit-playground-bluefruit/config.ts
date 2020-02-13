namespace config {
    export const PIN_NEOPIXEL = DAL.P0_13;
    export const NUM_NEOPIXELS = 10;
    export const DEFAULT_BUTTON_MODE = DAL.BUTTON_ACTIVE_HIGH_PULL_DOWN;

    export const PIN_FLASH_MISO = DAL.P0_23;
    export const PIN_FLASH_MOSI = DAL.P0_21;
    export const PIN_FLASH_SCK = DAL.P0_19;
    export const PIN_FLASH_CS = DAL.P0_15;
    export const PIN_MIC_DATA = DAL.P0_16;
    export const PIN_MIC_CLOCK = DAL.P0_17;
    export const PIN_LIGHT = DAL.P0_28;
    export const ACCELEROMETER_TYPE = DAL.ACCELEROMETER_TYPE_LIS3DH;
    export const PIN_ACCELEROMETER_SDA = DAL.P1_10;
    export const PIN_ACCELEROMETER_SCL = DAL.P1_12;
    export const PIN_ACCELEROMETER_INT = DAL.P1_13;
    export const PIN_TEMPERATURE = DAL.P0_31;
    export const PIN_BTN_A = DAL.P1_2;
    export const PIN_BTN_B = DAL.P1_15;
    export const PIN_BTN_SLIDE = DAL.P1_6;
    
    export const PIN_A0 = DAL.P0_26; // no AIN
    export const PIN_A1 = DAL.P0_2;
    export const PIN_A2 = DAL.P0_29;
    export const PIN_A3 = DAL.P0_3;
    export const PIN_A4 = DAL.P0_4;
    export const PIN_A5 = DAL.P0_5;
    export const PIN_A6 = DAL.P0_30;
    export const PIN_A7 = DAL.P0_14; // D1, no AIN
    export const PIN_A8 = PIN_LIGHT;
    export const PIN_A9 = PIN_TEMPERATURE;

    export const PIN_SPEAKER_AMP = DAL.P1_4;
    export const PIN_JACK_SND = PIN_A0;

    export const PIN_SCL = PIN_A4;
    export const PIN_SDA = PIN_A5;
    export const PIN_RX = PIN_A6;
    export const PIN_TX = PIN_A7;

    export const PIN_D4 = PIN_BTN_A;
    export const PIN_D5 = PIN_BTN_B;
    export const PIN_D7 = PIN_BTN_SLIDE;
    export const PIN_D8 = PIN_NEOPIXEL;
    export const PIN_D13 = DAL.P1_14;
    export const PIN_LED = PIN_D13;

    export const PIN_JACK_TX = PIN_TX; // TX
    export const PIN_JACK_COMMLED = PIN_LED; // LED
}
