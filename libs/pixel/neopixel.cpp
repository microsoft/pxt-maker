#include "pxt.h"
#include "neopixel.h"

namespace pixel {

/**
 * Sends a neopixel buffer to the specified digital pin
 * @param buf The buffer to send to the pin
 */
//% parts="pixel"
void sendBuffer(Buffer buf) {
    int pinName = PIN(DOTSTAR_DATA);
    if (pinName < 0) {
        pinName = PIN(NEOPIXEL);
        if (pinName < 0)
            pinName = PA11;
        neopixel_send_buffer(*lookupPin(pinName), buf->data, buf->length);
    } else {
        // TODO this code is untested (no hardware), lifted from bootloader
        int clockPin = PIN(DOTSTAR_CLOCK);
        auto dat = lookupPin(pinName);
        auto clk = lookupPin(clockPin);
        clk->setDigitalValue(0);
        fiber_sleep(1);
        for (int i = 0; i < buf->length; ++i) {
            int x = buf->data[i];
            for (uint8_t i = 0x80; i != 0; i >>= 1) {
                dat->setDigitalValue(x & i ? 1 : 0);
                clk->setDigitalValue(1);
                clk->setDigitalValue(0);
            }
        }
    }
}

}
