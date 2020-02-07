namespace config {
    export const ACCELEROMETER_TYPE = DAL.ACCELEROMETER_TYPE_MPU6050_ALT;
    export const PIN_ACCELEROMETER_SDA = DAL.PA00;
    export const PIN_ACCELEROMETER_SCL = DAL.PA01;
    // export const PIN_ACCELEROMETER_INT  = DAL.PA13;

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
    export const PIN_GPS_TX = DAL.PB02;
    export const PIN_GPS_RX = DAL.PB03;
    export const PIN_GPS_SDA = PIN_SDA;
    export const PIN_GPS_SCL = PIN_SCL;
    //SPI_PORT
    export const PIN_MOSI = DAL.PB08;
    export const PIN_MISO = DAL.PB11;
    export const PIN_SCK = DAL.PB09;
    export const PIN_SS = DAL.PB10;

    export const PIN_LED = DAL.PB22;

    export const PIN_BTN_A = DAL.PB27;

    //Flash pins not implement yet
    // export const PIN_FLASH_MISO = DAL.PA14;
    // export const PIN_FLASH_MOSI = DAL.PA12;
    // export const PIN_FLASH_SCK = DAL.PB13;
    // export const PIN_FLASH_SS = DAL.PB15;
}