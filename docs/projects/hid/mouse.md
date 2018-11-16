# Gamepad

A program that uses a pin to generate ``left mouse click``. Connect your board to your computer and test it out!

```blocks
input.buttonD0.onEvent(ButtonEvent.Down, function () {
    mouse.setButton(MouseButton.Left, true)
})
input.buttonD0.onEvent(ButtonEvent.Up, function () {
    mouse.setButton(MouseButton.Left, false)
})
```

```package
gamepad
```

```config
feature=uf2
feature=pind0
```
