#include "pxt.h"

#include "NRFLowLevelTimer.h"

namespace pxt {

NRFLowLevelTimer lowTimer(NRF_TIMER1, TIMER1_IRQn);
CODAL_TIMER devTimer(lowTimer);

static void initRandomSeed() {
    int seed = 0xC0DA1;
    /*
    auto pinTemp = LOOKUP_PIN(TEMPERATURE);
    if (pinTemp)
        seed *= pinTemp->getAnalogValue();
    auto pinLight = LOOKUP_PIN(LIGHT);
    if (pinLight)
        seed *= pinLight->getAnalogValue();
    */
    seedRandom(seed);
}

static void setupUICR() {
    // NFC pins are already handled in codal

    #ifdef NRF52840
    // If not set to 3.3V, update the non-volatile UICR.
    if ((NRF_UICR->REGOUT0 & 7) != 5) {
        DMESG("RESET UICR\n");
        // Enable Flash Writes
        NRF_NVMC->CONFIG = (NVMC_CONFIG_WEN_Wen << NVMC_CONFIG_WEN_Pos);
        while (NRF_NVMC->READY == NVMC_READY_READY_Busy)
            ;

        // Set VDD to 3.3V
        if ((NRF_UICR->REGOUT0 & 7) != 5)
            NRF_UICR->REGOUT0 = (NRF_UICR->REGOUT0 & ~7) | 5;

        // Disable Flash Writes
        NRF_NVMC->CONFIG = (NVMC_CONFIG_WEN_Ren << NVMC_CONFIG_WEN_Pos);
        while (NRF_NVMC->READY == NVMC_READY_READY_Busy)
            ;

        // Reset, so the changes can take effect.
        NVIC_SystemReset();
    }
    #endif
}

void platform_init() {
    initRandomSeed();

    setupUICR();

    /*
        if (*HF2_DBG_MAGIC_PTR == HF2_DBG_MAGIC_START) {
            *HF2_DBG_MAGIC_PTR = 0;
            // this will cause alignment fault at the first breakpoint
            globals[0] = (TValue)1;
        }
    */
}

} // namespace pxt

void cpu_clock_init() {
    // missing in Codal
}
