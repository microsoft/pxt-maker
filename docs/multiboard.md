# Multiple boards in one target

This target supports multiple boards. The boards share a common CPU, ATSAMD21, but have
different shapes, and different built-in components.

## Board packages

Boards are defined in board packages. A board package references the `core` package,
and possibly some additional packages (eg `pixel`). It contains a pin definition
file similar to this:

```typescript
declare namespace pins {
    //% shim=pxt::getPin(2)
    const A0: AnalogPin;
    //% shim=pxt::getPin(40)
    const A1: AnalogPin;
    // ...
    //% shim=pxt::getPin(11)
    const D0: DigitalPin;
    // ...
}
```

The arguments to `getPin()` are hardware pin numbers (in the example above: `PA02`, `PB08` 
(port B is at offset `32`), and `PA11`). The `getPin()` function now allocates pins dynamically.
There is no corresponding C++ file (ie no `devpins.cpp`) and no pin object array.

The `boardDefinition` element, formerly from `pxtarget.json`, is now provided by a JSON
file in the board package. The SVG visual is also provided as a file in the board package.
It's possible some code in `sim/*` will need to be further parametrized by the `boardDefinition`.

## Minor stuff

The various WSomething classes will need constructors that take pin numbers, and need to have 
functions that set the pin numbers (with some reasonable defaults).

Things like therometer (`NonLinearAnalogSensor`) would be best handled completely in TypeScript.

## Built-in components

Various SAMD21 Maker's boards have some of the following components:

* touch - this probably needs to be connected with Pin classes
* a single NeoPixel or DotStar Pixel
* monochromatic LEDs in different color (1 or more) - they are bound to
  a single pin, but depending on which one, you have to pull it up or down
  to turn it on
* SPI flash
* other things connected via SPI

## Boards

There's likely more, feel free to add.

### Adafruit 

* [CPX](https://www.adafruit.com/product/3333) - probably best not handled here at all
* [Gemma M0](https://www.adafruit.com/product/3501) - round with Dotstar pixel and croc-clip support
* [Trinket M0](https://www.adafruit.com/product/3500) - rectangular with DotStar pixel
* [Metro M0](https://www.adafruit.com/product/3505) - with Uno layout, one Neopixel and SPI flash

#### Adafruit Feather M0 family

They all look the same, with an additional component
connected via SPI.
They do not have a color RGB.

* [basic](https://www.adafruit.com/product/2772)
* [with WiFi](https://www.adafruit.com/product/3010)
* [with SD card](https://www.adafruit.com/product/2796)
* [with BLE](https://www.adafruit.com/product/2995)
* [with 900Mhz Radio](https://www.adafruit.com/product/3178); also other radios available
* [Express for Python](https://www.adafruit.com/product/3403) with SPI Flash

### Sparkfun

* [SAMD21 Mini Breakout](https://www.sparkfun.com/products/13664) - small
* [SAMD21 Dev Breakout](https://www.sparkfun.com/products/13672) - Uno layout

### Arduino

These three have Uno layout. The last two have on-board debugger (we could use it
for HID flashing if needed).

* [M0](https://store.arduino.cc/arduino-m0)
* [M0 Pro](https://store.arduino.cc/arduino-m0-pro)
* [Zero](https://store.arduino.cc/genuino-zero)

There's also [Tian](https://store.arduino.cc/arduino-tian), with a second chip
running Linux - probably too exotic.

#### MKR family

Much like Feather.

* [MKR Zero](https://store.arduino.cc/arduino-mkrzero) - SD card
* [MKR 1000](https://store.arduino.cc/arduino-mkr1000) - WiFi
* [MKR Fox 1200](https://store.arduino.cc/arduino-mkrfox1200) - with a custom radio (SigFox)
* [MKR WAN 1300](https://store.arduino.cc/mkr-wan-1300) - with 900Mhz radio
* [MKR GSM 1400](https://store.arduino.cc/mkr-gsm-1400), requires a SIM card ;)

### Seeed Studio

They have Seeeduino boards with Uno layout. Most of them are AVR, but some are SAMD21.
Interestingly, I could only find these two with SAMD.

* [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html) - Uno layout with radio
* [Seeeduino LoRaWAN W/GPS](https://www.seeedstudio.com/Seeeduino-LoRaWAN-W%2FGPS-p-2781.html)
