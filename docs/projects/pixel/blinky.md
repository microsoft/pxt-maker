# Set Color

Set the color of onboard LED pixel

```blocks
forever(function() {
    pixel.setColor(0xff0000)
    pause(100)
    pixel.setColor(0x007fff)
    pause(100)
})
```