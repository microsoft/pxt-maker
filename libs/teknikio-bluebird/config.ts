namespace config {
    export const PIN_NEOPIXEL = DAL.P1_15;
    export const NUM_NEOPIXELS = 1;

    export const PIN_A0 = DAL.P1_14; // no AIN
    export const PIN_A1 = DAL.P0_29;
    export const PIN_A2 = DAL.P0_31;
    export const PIN_A3 = DAL.P0_2;
    export const PIN_A4 = DAL.P0_3;
    export const PIN_A5 = DAL.P0_5;
    export const PIN_A6 = DAL.P0_4;

    export const PIN_D7 = DAL.P0_6;
    export const PIN_D8 = DAL.P1_9;
    export const PIN_D9 = DAL.P0_12;
    export const PIN_D11 = DAL.P0_7;
    export const PIN_D12 = DAL.P0_8;
    export const PIN_D13 = DAL.P1_8;
    export const PIN_D14 = DAL.P0_11;
    export const PIN_D15 = DAL.P0_30;

    export const PIN_FLASH_MISO = PIN_D11;
    export const PIN_FLASH_MOSI = PIN_D12;
    export const PIN_FLASH_SCK = PIN_D13;

    export const PIN_LIGHT = DAL.P0_28;
    export const PIN_JACK_SND = PIN_A0;
    export const PIN_RX = PIN_D7;
    export const PIN_TX = PIN_D8;

    export const ACCELEROMETER_TYPE = DAL.ACCELEROMETER_TYPE_MPU6050;
    export const PIN_ACCELEROMETER_SCL = DAL.P1_11;
    export const PIN_ACCELEROMETER_SDA = DAL.P1_12;
    export const PIN_ACCELEROMETER_INT = DAL.P1_10;
}
