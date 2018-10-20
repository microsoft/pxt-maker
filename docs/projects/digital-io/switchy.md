# Switchy

Attach a switch on a digital pin to turn a LED on or off

```blocks
let on = false
forever(function () {
    on = pins.D1.digitalRead()
    pins.LED.digitalWrite(on)
})
```

```config
feature=pinled
feature=pind1
```