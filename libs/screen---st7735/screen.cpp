#include "pxt.h"
#include "ST7735.h"

namespace pxt {
class WDisplay {
  public:
    NRF52SPI spi;
    ST7735 lcd;

    uint32_t currPalette[16];
    bool newPalette;

    uint8_t *screenBuf;
    Image_ lastImg;

    int width, height;

    WDisplay()
        : spi(*LOOKUP_PIN(DISPLAY_MOSI), *LOOKUP_PIN(DISPLAY_MISO), *LOOKUP_PIN(DISPLAY_SCK)),
          lcd(spi, *LOOKUP_PIN(DISPLAY_CS), *LOOKUP_PIN(DISPLAY_DC)) {
        lcd.init();
        uint32_t cfg0 = getConfig(CFG_DISPLAY_CFG0, 0x40);
        uint32_t frmctr1 = getConfig(CFG_DISPLAY_CFG1, 0x000603);
        auto madctl = cfg0 & 0xff;
        auto offX = (cfg0 >> 8) & 0xff;
        auto offY = (cfg0 >> 16) & 0xff;
        lcd.configure(madctl, frmctr1);
        width = getConfig(CFG_DISPLAY_WIDTH, 160);
        height = getConfig(CFG_DISPLAY_HEIGHT, 128);
        lcd.setAddrWindow(offX, offY, width, height);
        screenBuf = new uint8_t[width * height / 2 + 20];
        lastImg = NULL;
    }
};

SINGLETON(WDisplay);

//%
void setPalette(Buffer buf) {
    auto display = getWDisplay();
    if (48 != buf->length)
        target_panic(907);
    for (int i = 0; i < 16; ++i) {
        display->currPalette[i] =
            (buf->data[i * 3] << 16) | (buf->data[i * 3 + 1] << 8) | (buf->data[i * 3 + 2] << 0);
    }
    display->newPalette = true;
}

//%
void updateScreen(Image_ img) {
    auto display = getWDisplay();
    
    if (img && img != display->lastImg) {
        decrRC(display->lastImg);
        incrRC(img);
        display->lastImg = img;
    }
    img = display->lastImg;

    if (img && img->isDirty()) {
        if (img->bpp() != 4 || img->width() != display->width || img->height() != display->height)
            target_panic(906);

        img->clearDirty();
        display->lcd.waitForSendDone();
        
        auto palette = display->currPalette;

        if (display->newPalette) {
            display->newPalette = false;
        } else {
            palette = NULL;
        }

        memcpy(display->screenBuf, img->pix(), img->pixLength());

        display->lcd.sendIndexedImage(display->screenBuf, display->width, display->height, palette);
    }
}

//%
void updateStats(String msg) {
    // ignore...
}
} // namespace pxt
