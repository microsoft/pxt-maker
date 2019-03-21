# Gamepad

A program that uses a pin to generate ``A`` button press from a keyboard. Connect your board to your computer and test it out at http://html5gamepad.com/ !

```blocks
input.buttonD1.onEvent(ButtonEvent.Down, function () {
    gamepad.setButton(GamepadButton.A, true)
})
input.buttonD1.onEvent(ButtonEvent.Up, function () {
    gamepad.setButton(GamepadButton.A, false)
})
```

```package
gamepad
```

```config
feature=uf2
feature=buttonD1
```
