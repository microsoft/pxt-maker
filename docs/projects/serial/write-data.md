# Write data

Writes data at a regular interval

```blocks
forever(function () {
    serial.writeValue("dice", Math.randomRange(1, 6));
    pause(500)
})
```

```package
serial
```