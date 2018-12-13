# Rainbow


```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.D0, 30)
forever(function () {
    strip.showAnimation(light.rainbowAnimation, 2000)
})
```