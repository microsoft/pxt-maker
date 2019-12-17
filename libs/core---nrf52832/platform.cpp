#include "pxt.h"

#include "NRFLowLevelTimer.h"

namespace pxt {

struct TimerConfig {
    uint8_t id;
    IRQn_Type irqn;
    NRF_TIMER_Type *addr;
};

#define DEF_TIM(n)                                                                                 \
    { 0x10 + n, TIMER##n##_IRQn, NRF_TIMER##n }

static const TimerConfig timers[] = {
#ifdef NRF_TIMER0
    DEF_TIM(0),
#endif
#ifdef NRF_TIMER1
    DEF_TIM(1),
#endif
#ifdef NRF_TIMER2
    DEF_TIM(2),
#endif
#ifdef NRF_TIMER3
    DEF_TIM(3),
#endif
#ifdef NRF_TIMER4
    DEF_TIM(4),
#endif
#ifdef NRF_TIMER5
    DEF_TIM(5),
#endif
#ifdef NRF_TIMER6
    DEF_TIM(6),
#endif
{0,(IRQn_Type)0,0}
};

#define DEF_TIMERS 0x11121013 // TIMER1 TIMER2 TIMER0 TIMER3

static uint32_t usedTimers;
static int timerIdx(uint8_t id) {
    for (unsigned i = 0; timers[i].id; i++) {
        if (id == timers[i].id)
            return i;
    }
    return -1;
}
LowLevelTimer *allocateTimer() {
    uint32_t timersToUse = getConfig(CFG_TIMERS_TO_USE, DEF_TIMERS);
    for (int shift = 24; shift >= 0; shift -= 8) {
        uint8_t tcId = (timersToUse >> shift) & 0xff;
        int idx = timerIdx(tcId);
        if (idx < 0 || (usedTimers & (1 << idx)))
            continue;
        auto dev = timers[idx].addr;
        if (dev->INTENSET) // any irqs enabled?
            continue; // then we won't allocate it
        usedTimers |= 1 << idx;
        DMESG("allocate TIMER%d", tcId - 0x10);
        return new NRFLowLevelTimer(dev, timers[idx].irqn);
    }

    target_panic(PANIC_OUT_OF_TIMERS);
    return NULL;
}


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

#ifdef NRF52840
#define IS_3_3_V() ((NRF_UICR->REGOUT0 & 7) == 5)
#else
#define IS_3_3_V() 1
#endif

static void disableNFConPins() {
    // Ensure NFC pins are configured as GPIO. If not, update the non-volatile UICR.
    if (NRF_UICR->NFCPINS || !IS_3_3_V()) {
        DMESG("RESET UICR\n");
        // Enable Flash Writes
        NRF_NVMC->CONFIG = (NVMC_CONFIG_WEN_Wen << NVMC_CONFIG_WEN_Pos);
        while (NRF_NVMC->READY == NVMC_READY_READY_Busy)
            ;

        // Configure PINS for GPIO use.
        if (NRF_UICR->NFCPINS)
            NRF_UICR->NFCPINS = 0;

#ifdef NRF52840
        // Set VDD to 3.3V
        if ((NRF_UICR->REGOUT0 & 7) != 5)
            NRF_UICR->REGOUT0 = (NRF_UICR->REGOUT0 & ~7) | 5;
#endif

        // Disable Flash Writes
        NRF_NVMC->CONFIG = (NVMC_CONFIG_WEN_Ren << NVMC_CONFIG_WEN_Pos);
        while (NRF_NVMC->READY == NVMC_READY_READY_Busy)
            ;

        // Reset, so the changes can take effect.
        NVIC_SystemReset();
    }
}

void platform_init() {
    initRandomSeed();

    disableNFConPins(); // this is needed when P0_9 and P0_10 are to be used as regular pins

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
