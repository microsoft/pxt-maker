
namespace config {
    export const PIN_D13 = DAL.P0_11;
    export const PIN_LED = DAL.P0_11;
    export const PIN_SDA = DAL.P0_28;
    export const PIN_SCL = DAL.P0_2;
    export const PIN_SCK = DAL.P0_2;
    export const PIN_MISO = DAL.P0_30;
    export const PIN_MOSI = DAL.P0_29;
    export const PIN_RX = DAL.P0_30;
    export const PIN_TX = DAL.P0_29;

    export const PIN_A0 = DAL.P0_3;
    export const PIN_A1 = DAL.P0_4;
    export const PIN_A2 = DAL.P0_5;
    export const PIN_D0 = DAL.P0_7;
    export const PIN_D1 = DAL.P0_25;
    export const PIN_D2 = DAL.P0_26;
    export const PIN_D3 = DAL.P0_27;
    
    /*
    export const PIN_DISPLAY_MOSI = DAL.P0_22;
    export const PIN_DISPLAY_MISO = -1;
    export const PIN_DISPLAY_SCK = DAL.P0_15;
    export const PIN_DISPLAY_CS = DAL.P0_8;
    export const PIN_DISPLAY_DC = DAL.P0_24;
    export const PIN_DISPLAY_RST = DAL.P0_14;
    */

    /* NRF DK
    export const PIN_DISPLAY_MOSI = DAL.P0_28;
    export const PIN_DISPLAY_MISO = -1;
    export const PIN_DISPLAY_SCK = DAL.P0_4;
    export const PIN_DISPLAY_CS = DAL.P0_3;
    export const PIN_DISPLAY_DC = DAL.P0_29;
    export const PIN_DISPLAY_RST = DAL.P0_30;
    */

   export const PIN_DISPLAY_MOSI = DAL.P0_22;
   export const PIN_DISPLAY_MISO = -1;
   export const PIN_DISPLAY_SCK = DAL.P0_15;
   export const PIN_DISPLAY_CS = DAL.P0_8;
   export const PIN_DISPLAY_DC = DAL.P0_24;
   export const PIN_DISPLAY_RST = DAL.P0_14;


    // it's really piezo speaker, not an amp
    export const PIN_SPEAKER_AMP = DAL.P0_16;

    // 128x128
    //export const DISPLAY_CFG0 = 0x00010248;
    //export const DISPLAY_CFG1 = 0x083B3B;

    // ST7735 from AMZ
    export const DISPLAY_CFG0 = 0x00000040;
    export const DISPLAY_CFG1 = 0x000603;

    export const DISPLAY_CFG2 = 0x00000008; // 8MHz

    // ST7735 from ALI
    //export const DISPLAY_CFG0 = 0x01000090;
    //export const DISPLAY_CFG1 = 0x000603;

    // ILI9163 from ALI
    //export const DISPLAY_CFG0 = 0x00000090;
    //export const DISPLAY_CFG1 = 0x000e14ff;
    
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;
}


game.setWaitAnyKey(keys.pauseUntilAnyKey)
game.gameOverSound = () => music.playSound(music.sounds(Sounds.Wawawawaa));
