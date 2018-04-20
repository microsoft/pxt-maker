# Blinky

Turn on and off the light pin to create a blinking effect.

```blocks
forever(function() {
    pins.LED.digitalWrite(true)
    loops.pause(500)
    pins.LED.digitalWrite(false)
    loops.pause(500)    
})
```

```package
adafruit-metro-m0-express
```