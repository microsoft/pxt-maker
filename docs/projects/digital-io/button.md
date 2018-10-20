# On Off Button

Use a button on a digital pin to control an LED

```blocks
input.buttonD1.onEvent(ButtonEvent.Down, function () {
    pins.LED.digitalWrite(true)
})
input.buttonD1.onEvent(ButtonEvent.Up, function () {
    pins.LED.digitalWrite(false)    
})
```

```config
feature=pinled
feature=buttond1
```