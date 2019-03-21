# Switchy

## Introduction @unplugged

Attach a switch on a digital pin to turn a LED on or off.

![A simulated breadboard with a switch that controls an LED](/static/projects/digital-io/switch-led/gallery.gif)

## Step 1 @fullscreen

Add a ``||pins:digital write||`` block under the ``||loops:forever||`` to set pin **D1** to ``LOW`` (false).

```blocks
forever(function () {
    pins.D1.digitalWrite(false)
})
```

## Step 2 @fullscreen

Add a ``||pins:digital read||`` block in the ``LOW``/``HIGH`` slot. Change the pin to **D0**.

```blocks
forever(function () {
    pins.D1.digitalWrite(pins.D0.digitalRead())
})
```

## Step 3 @fullscreen

Look at the simulator and test if your program works as you would expect. If you move the switch, the LED
should turn on and off.

## Step 4 @fullscreen

Click ``||Download||`` to download your code into your board and click the **wrench** to get detailled
breadboarding instructions.

```config
feature=uf2
feature=pind0
feature=pind1
```