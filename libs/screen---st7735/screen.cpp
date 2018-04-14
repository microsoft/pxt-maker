#include "pxt.h"
#include "ST7735.h"

#define LCD_WIDTH 128
#define LCD_HEIGHT 128

namespace pxt {
class WDisplay {
  public:
    NRF52SPI spi;
    ST7735 lcd;

    uint32_t currPalette[16];
    bool newPalette;

    uint32_t expPalette[256];
    uint8_t screenBuf[LCD_WIDTH * LCD_HEIGHT / 2 + 20];

    WDisplay()
        : spi(*lookupPin(P0_3), *(Pin *)NULL, *lookupPin(P0_4)),
          lcd(spi, *lookupPin(P0_28), *lookupPin(P0_29)) {
        lcd.init();
        lcd.setAddrWindow(0, 0, LCD_WIDTH, LCD_HEIGHT);
    }
};

SINGLETON(WDisplay);

static Image_ lastImg;

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
    if (img && img != lastImg) {
        decrRC(lastImg);
        incrRC(img);
        lastImg = img;
    }

    if (lastImg && lastImg->isDirty()) {
        if (lastImg->bpp() != 4 || lastImg->width() != LCD_WIDTH || lastImg->height() != LCD_HEIGHT)
            target_panic(906);

        lastImg->clearDirty();
        auto display = getWDisplay();
        display->lcd.waitForSendDone();

        if (lastImg->length() > (int)sizeof(display->screenBuf) - 10)
            target_panic(908);
        
        if (display->newPalette) {
            display->newPalette = false;
            display->lcd.expandPalette(display->currPalette, display->expPalette);
        } else {
          //  palette = NULL;
        }
        
        int off = ((uint32_t)lastImg->pix()) & 3;
        uint32_t *src = (uint32_t *)(lastImg->pix() - off);
        uint32_t *dst = (uint32_t *)display->screenBuf;
        unsigned len = (lastImg->length() + off + 7) >> 3;

        while (len--) {
            *dst++ = *src++;
            *dst++ = *src++;
        }

        display->lcd.sendIndexedImage(display->screenBuf + off, LCD_WIDTH, LCD_HEIGHT,
                                      display->expPalette);
    }
}

//%
void updateStats(String msg) {
    // ignore...
}
} // namespace pxt
