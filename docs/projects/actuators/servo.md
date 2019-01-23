# Servo

Control the angle of a servo using a light sensor.

```blocks
input.buttonD0.onEvent(ButtonEvent.Click, function () {
    pins.A1.servoWrite(0)
})
input.buttonD1.onEvent(ButtonEvent.Click, function () {
    pins.A1.servoWrite(180)
})
```

```config
feature=uf2
feature=buttond0
feature=buttond1
feature=pina1