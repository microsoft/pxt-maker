# Magic Glow

Control the brightness of an LED with a light sensor.

```blocks
forever(function () {
    let brightness = pins.A1.analogRead();
    pins.A2.analogWrite(brightness);
})
```
