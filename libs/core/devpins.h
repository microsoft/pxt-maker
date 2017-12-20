#ifndef __PXT_DEV_PINS_H
#define __PXT_DEV_PINS_H

#include "pins.h"

class DevPins {
  public:
    DevicePin pins[0];
#define DigitalPin DevicePin
#define AnalogPin DevicePin
#define PwmPin DevicePin
    //% indexedInstanceNS=pins indexedInstanceShim=pxt::getPin
    //%
    AnalogPin A0;
    //%
    AnalogPin A1;
    //%
    AnalogPin A2;
    //%
    AnalogPin A3;
    //%
    AnalogPin A4;
    //%
    AnalogPin A5;
    //%
    DigitalPin D0;
    //%
    DigitalPin D1;
    //%
    DigitalPin D2;
    //%
    PwmPin D3;
    //%
    PwmPin D4;
    //%
    PwmPin D5;
    //%
    PwmPin D6;
    //%
    DigitalPin D7;
    //%
    PwmPin D8;
    //%
    PwmPin D9;
    //%
    PwmPin D10;
    //%
    PwmPin D11;
    //%
    PwmPin D12;
    //%
    PwmPin D13;
    //%
    DigitalPin RX;
    //%
    DigitalPin TX;
#undef DigitalPin
#undef AnalogPin
#undef PwmPin

    DevicePin SPEAKER;
    DevicePin NEOPIXEL;
    codal::mbed::I2C i2c;

    DevPins();
};

extern DevPins *io;

// modify if the last field changes
const int LastPinID = &io->NEOPIXEL - io->pins;

#endif