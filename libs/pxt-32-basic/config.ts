
namespace config {
    export const PIN_LED = DAL.PC_5;
    export const PIN_SCK = DAL.PA_5;
    export const PIN_MISO = DAL.PA_6;
    export const PIN_MOSI = DAL.PA_7;
    export const PIN_RX = DAL.PA_10;
    export const PIN_TX = DAL.PA_9;

    export const PIN_D0 = DAL.PA_3;
    export const PIN_D1 = DAL.PA_2;
    export const PIN_D2 = DAL.PA_10;
    export const PIN_D3 = DAL.PB_3;
    export const PIN_D4 = DAL.PB_5;
    export const PIN_D5 = DAL.PB_4;
    export const PIN_D6 = DAL.PB_10;
    export const PIN_D7 = DAL.PA_8;
    export const PIN_D8 = DAL.PA_9;
    export const PIN_D9 = DAL.PC_7;
    export const PIN_D10 = DAL.PB_6;

    export const PIN_D11 = DAL.PA_7;
    export const PIN_D12 = DAL.PA_6;
    export const PIN_D13 = DAL.PA_5;

    export const PIN_D14 = DAL.PB_9;
    export const PIN_D15 = DAL.PB_8;


    export const PIN_DISPLAY_CS = PIN_D9;
    export const PIN_DISPLAY_SCK = PIN_D13;
    export const PIN_DISPLAY_MOSI = PIN_D11;
    export const PIN_DISPLAY_DC = PIN_D10;
    export const PIN_DISPLAY_RST = PIN_D14;
    export const PIN_DISPLAY_MISO = -1; // NC


    /*
    export const PIN_DISPLAY_MOSI = DAL.PB_15; // 34
    export const PIN_DISPLAY_MISO = DAL.PB_14; // NC / 33
    export const PIN_DISPLAY_SCK = DAL.PB_13; // 32
    export const PIN_DISPLAY_CS = DAL.PB_12; // 31
    export const PIN_DISPLAY_DC = DAL.PC_6; // 35
    */

    // it's really piezo speaker, not an amp
    export const PIN_SPEAKER_AMP = PIN_D12;

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
