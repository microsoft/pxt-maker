namespace config {
    export const PIN_RCC1 = DAL.PA07;
    export const PIN_RCC2 = DAL.PA06;
    export const PIN_RCC3 = DAL.PA05;
    export const PIN_RCC4 = DAL.PA04;

    export const PIN_SERVO1 = DAL.PA18;
    export const PIN_SERVO2 = DAL.PA19;
    export const PIN_SERVO3 = DAL.PA20;
    export const PIN_SERVO4 = DAL.PA21;
    export const PIN_SERVO5 = DAL.PA11;
    export const PIN_SERVO6 = DAL.PA10;
    export const PIN_SERVO7 = DAL.PA09;
    export const PIN_SERVO8 = DAL.PA08;

    // export const PIN_RCC4 = PIN_A3;
    // export const PIN_RCC3 = PIN_A2;
    // export const PIN_RCC2 = PIN_A1;
    // export const PIN_RCC1 = PIN_A0;

    // export const PIN_SERVO1 = PIN_D0;
    // export const PIN_SERVO2 = PIN_D1;
    // export const PIN_SERVO3 = PIN_D2;
    // export const PIN_SERVO4 = PIN_D3;
    // export const PIN_SERVO5 = PIN_D4;
    // export const PIN_SERVO6 = PIN_D5;
    // export const PIN_SERVO7 = PIN_D6;
    // export const PIN_SERVO8 = PIN_D7;

    export const PIN_GROVE0 = PIN_SERVO8;
    export const PIN_GROVE1 = PIN_SERVO7;

    //NEOPIXEL pin
    export const PIN_NEOPIXEL = DAL.PB23;
    export const NUM_NEOPIXELS = 10;

    //Pi Serial
    export const PIN_PI_TX = DAL.PA16;
    export const PIN_PI_RX = DAL.PA17;

    //I2C_PORT
    export const PIN_SDA = DAL.PA00;
    export const PIN_SCL = DAL.PA01;

    //GPS_PORT
    export const PIN_TX = DAL.PB02;
    export const PIN_RX = DAL.PB03;
    export const PIN_GPS_SDA = PIN_SDA;
    export const PIN_GPS_SCL = PIN_SCL;
    //SPI_PORT
    export const PIN_MOSI = DAL.PB08;
    export const PIN_MISO = DAL.PB11;
    export const PIN_SCK = DAL.PB09;
    export const PIN_SS = DAL.PB10;

    export const PIN_LED = DAL.PB22;
    //Flash pins not implement yet
    // export const PIN_FLASH_MISO = DAL.PA14;
    // export const PIN_FLASH_MOSI = DAL.PA12;
    // export const PIN_FLASH_SCK = DAL.PB13;
    // export const PIN_FLASH_SS = DAL.PB15;
}
