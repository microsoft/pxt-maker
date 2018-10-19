# Switchy

Attach a switch on a digital pin to turn a LED on or off

```blocks
let on = false
forever(function () {
    on = pins.D1.digitalRead()
    pins.D2.digitalWrite(on)
})
```