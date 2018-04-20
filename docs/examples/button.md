# On Off Button

Use a button on a digital pin to control an LED

```blocks
input.buttonA1.onEvent(ButtonEvent.Down, function () {
    pins.LED.digitalWrite(true)
})
input.buttonA1.onEvent(ButtonEvent.Up, function () {
    pins.LED.digitalWrite(false)    
})
```