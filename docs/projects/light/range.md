# Range

## Example

```blocks
let end: light.NeoPixelStrip = null
let start: light.NeoPixelStrip = null
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.D0, 30)
start = strip.range(0, 10)
end = strip.range(20, 10)
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
