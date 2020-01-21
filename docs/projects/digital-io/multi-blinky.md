# Multi Blinky

You can have multiple forever loops running concurrently to blink multiple LEDs.

```blocks
forever(function() {
    pins.D0.digitalWrite(false)
    pause(100)
    pins.D0.digitalWrite(true)
    pause(100)    
})
forever(function() {
    pins.D1.digitalWrite(false)
    pause(500)
    pins.D1.digitalWrite(true)
    pause(500)    
})
```

```config
feature=uf2
feature=pind0
feature=pind1
```