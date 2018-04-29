
namespace config {
    export const PIN_D13 = DAL.PA_5;
    export const PIN_LED = DAL.PA_5;
    export const PIN_SCK = DAL.PA_5;
    export const PIN_MISO = DAL.PA_6;
    export const PIN_MOSI = DAL.PA_7;
    export const PIN_RX = DAL.PA_10;
    export const PIN_TX = DAL.PA_9;

    export const PIN_D0 = DAL.PA_10;
    export const PIN_D1 = DAL.PA_9;
    export const PIN_D2 = DAL.PA_0;
    export const PIN_D3 = DAL.PA_1;
    export const PIN_D4 = DAL.PB_5;
    export const PIN_D5 = DAL.PB_6;
    export const PIN_D6 = DAL.PA_8;
    export const PIN_D7 = DAL.PA_11;
    export const PIN_D8 = DAL.PC_11;
    export const PIN_D9 = DAL.PC_10;
    export const PIN_D10 = DAL.PA_4;
    export const PIN_D11 = DAL.PA_7;
    export const PIN_D12 = DAL.PA_6;

    export const PIN_DISPLAY_MOSI = DAL.PB_15; // 34
    export const PIN_DISPLAY_MISO = DAL.PB_14; // NC / 33
    export const PIN_DISPLAY_SCK = DAL.PB_13; // 32
    export const PIN_DISPLAY_CS = DAL.PB_12; // 31
    export const PIN_DISPLAY_DC = DAL.PC_6; // 35

    // it's really piezo speaker, not an amp
    export const PIN_SPEAKER_AMP = DAL.PC_7; // 36

    // 128x128
    //export const DISPLAY_CFG0 = 0x00010248;
    //export const DISPLAY_CFG1 = 0x083B3B;

    // ST7735 from AMZ
    //export const DISPLAY_CFG0 = 0x00000040;
    //export const DISPLAY_CFG1 = 0x000603;

    // ST7735 from ALI
    //export const DISPLAY_CFG0 = 0x01000090;
    //export const DISPLAY_CFG1 = 0x000603;

    // ILI9163 from ALI
    export const DISPLAY_CFG0 = 0x00000090;
    export const DISPLAY_CFG1 = 0x000e14ff;

    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;
}


game.setWaitAnyKey(keys.pauseUntilAnyKey)
game.gameOverSound = () => music.playSound(music.sounds(Sounds.Wawawawaa));
