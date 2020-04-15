# Range

## Example

```blocks
let strip = light.defaultStrip()
light.setLength(30)
let start = strip.range(0, 10)
let end = strip.range(20, 10)
forever(function () {
    start.showAnimation(light.rainbowAnimation, 2000)
})
forever(function () {
    end.showAnimation(light.cometAnimation, 2000)
})
```

```package
light
```
