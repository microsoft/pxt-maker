# Servo Sweep

Sweep the servo from left to right

```blocks
forever(button() {
    pins.A1.servoWrite(0)
    pause(1000)
    pins.A1.servoWrite(180)
    pause(1000)
})
```

```config
feature=uf2
feature=pina1
```