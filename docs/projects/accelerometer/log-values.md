# Log Values

Visualize the accelerometer data using the console.

```blocks
forever(function () {
    console.logValue("acc.x", input.acceleration(Dimension.X))
    console.logValue("acc.y", input.acceleration(Dimension.Y))
    console.logValue("acc.z", input.acceleration(Dimension.Z))
    console.logValue("acc.strength", input.acceleration(Dimension.Strength))
})
```


```config
feature=uf2
feature=accelerometer
```

```package
accelerometer
```
