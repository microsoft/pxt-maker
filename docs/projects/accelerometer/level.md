# Level

This sample turns on an LED when the device is close to level.

```blocks
forever(function () {
    let x = Math.abs(input.acceleration(Dimension.X))
    let y = Math.abs(input.acceleration(Dimension.Y))
    let z = Math.abs(input.acceleration(Dimension.Z)) - 1000
    if (x + (y + z) < 200) {
        pins.D0.digitalWrite(true)
    } else {
        pins.D0.digitalWrite(false)
    }
})
```

```config
feature=uf2
feature=pind0
feature=accelerometer
```

```package
accelerometer
```
