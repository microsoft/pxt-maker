namespace control {
    //% shim=pxt::deepSleep
    function _deepSleep() { }

    const CFG_PIN_JDPWR_ENABLE = 1104

    export function enableNeopixelPower(enabled = true) {
        pins.LIGHT_PWR.digitalWrite(!enabled)
    }

    export function deepSleep() {
        enableNeopixelPower(false)
        const pin = pins.pinByCfg(CFG_PIN_JDPWR_ENABLE)
        if (pin)
            pin.digitalWrite(true) // disable JD power
        pause(10)
        _deepSleep()
    }

    function init() {
        pins.LIGHT_FAULT.setPull(PinPullMode.PullUp)
        pins.LIGHT_FAULT.digitalRead()
        enableNeopixelPower()
        forever(() => {
            if (pins.LIGHT_FAULT.digitalRead() == false) {
                enableNeopixelPower(false)
                pause(10)
                enableNeopixelPower(true)
            }
            pause(1000)
        })
    }
    init()
}