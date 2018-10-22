# Blinky

## Introduction @unplugged

Turn on and off the light pin to create a blinking effect.

![A breadboard with a blinking LED](/static/projects/digital-io/blinky/gallery.gif)

## Step 1 @fullscreen

Add a ``||pins:digital write||`` block to turn on the ``LED`` pin.

```blocks
forever(function() {
    pins.LED.digitalWrite(true)
})
```

## Step 2 @fullscreen

Take a peek at the simulator and make sure the LED is turned on. It usually sits near pin ``D13``.

## Step 3 @fullscreen

Add more ``||blocks:pause||`` and ``||pins:digital write||`` blocks to create a blinking effect.
Play with the duration in your pauses to create different patterns.

```blocks
forever(function() {
    pins.LED.digitalWrite(true)
    pause(500)
    pins.LED.digitalWrite(false)
    pause(500)    
})
```

## Step 4 @fullscreen

If you have a @boardname@, press ``|Download|`` and follow the instruction to get your code on your device.

```config
feature=uf2
feature=pinled
```