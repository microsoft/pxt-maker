# Keyboard

A program that uses a pin to generate ``space`` keyboard key events. Connect your board to a computer to test it out!

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

```package
keyboard
```

```config
feature=uf2
feature=pind0
```
