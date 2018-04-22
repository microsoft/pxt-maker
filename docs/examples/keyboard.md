# Keyboard

A program that uses a pin to generate ``space`` keyboard key events.

```blocks
input.buttonD1.onEvent(ButtonEvent.Down, function () {
    keyboard.key(" ", KeyboardKeyEvent.Down)
    pins.LED.digitalWrite(true)
})
input.buttonD1.onEvent(ButtonEvent.Up, function () {
    keyboard.key(" ", KeyboardKeyEvent.Up)
    pins.LED.digitalWrite(false)
})
```