# Blink to Light

## Introduction @unplugged

Blink an LED where the tempo is controlled by a light sensor.

![An LED blinking based on a light sensor](/static/projects/analog-io/blink-to-light/gallery.gif)

## Step 1 @fullscreen

Add the code to drives a **blinking LED** on pin **D0**.

```blocks
forever(function () {
    pins.D0.digitalWrite(true)
    pause(100)
    pins.D0.digitalWrite(false)
    pause(100)
})
```

## Step 2 @fullscreen

Insert a ``||pins:analog read||`` block for **A0** in the first ``||loops:pause||`` block.
The ``||pins:analog read||`` returns a value between 0 (no input) to 1023 (full input) which will be translated in milliseconds of pause.

```blocks
forever(function () {
    pins.D0.digitalWrite(true)
    pause(pins.A0.analogRead())
    pins.D0.digitalWrite(false)
    pause(100)
})
```

## Step 3 @fullscreen

Look at the simulator and make sure your program works as expected. 

If you have a @boardname@, press ``|Download|`` and follow the instruction to get your code on your device.

Click on the **wrench** icon under the simulator to get detailed breadboarding instructions.

```config
feature=uf2
feature=pind0
feature=pina0
```