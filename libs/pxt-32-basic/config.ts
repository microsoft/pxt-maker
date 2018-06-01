
namespace config {
    export const PIN_LED = DAL.PC_8;
    
    export const PIN_SCK = DAL.PA_5;
    export const PIN_MISO = DAL.PA_6;
    export const PIN_MOSI = DAL.PA_7;

    export const PIN_RX = DAL.PA_10;
    export const PIN_TX = DAL.PA_9;

    export const PIN_SDA = DAL.PB_7;
    export const PIN_SCL = DAL.PB_6;

    export const PIN_D14 = DAL.PB_9;
    export const PIN_D15 = DAL.PB_8;

    export const PIN_BTN_LEFT = DAL.PA_15;
    export const PIN_BTN_UP = DAL.PA_5;
    export const PIN_BTN_RIGHT = DAL.PC_13;
    export const PIN_BTN_DOWN = DAL.PB_10;
    
    export const PIN_BTN_A = PIN_SDA;
    export const PIN_BTN_B = PIN_SCL;


    export const PIN_DISPLAY_CS = DAL.PC_3;
    export const PIN_DISPLAY_SCK = DAL.PB_3;
    export const PIN_DISPLAY_MOSI = DAL.PB_5;
    export const PIN_DISPLAY_DC = DAL.PA_7;
    export const PIN_DISPLAY_RST = DAL.PA_6;
    export const PIN_DISPLAY_MISO = DAL.PB_4;

    // it's really piezo speaker, not an amp
    export const PIN_SPEAKER_AMP = DAL.PA_8;

    // 128x128
    //export const DISPLAY_CFG0 = 0x00010248;
    //export const DISPLAY_CFG1 = 0x083B3B;

    // ST7735 from AMZ
    //export const DISPLAY_CFG0 = 0x00000040;
    //export const DISPLAY_CFG1 = 0x000603;

    // ST7735 from ALI
    export const DISPLAY_CFG0 = 0x01000090;
    export const DISPLAY_CFG1 = 0x000603;

    // ILI9163 from ALI
    //export const DISPLAY_CFG0 = 0x00000090;
    //export const DISPLAY_CFG1 = 0x000e14ff;

    export const DISPLAY_CFG2 = 22; // MHz
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;
}

game.gameOverSound = () => music.playSound(music.sounds(Sounds.Wawawawaa));
game.setWaitAnyButton(controller.pauseUntilAnyButtonIsPressed)
