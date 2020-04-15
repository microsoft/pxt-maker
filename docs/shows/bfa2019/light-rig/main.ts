forever(function () {
    light.pixels.showAnimation(light.rainbowAnimation, 500)
})
forever(function () {
    light.pixels2.showAnimation(light.cometAnimation, 500)
})
forever(function () {
    light.pixels3.showAnimation(light.colorWipeAnimation, 500)
})
forever(function () {
    light.pixels5.showAnimation(light.theaterChaseAnimation, 500)
})
forever(function () {
    light.pixels6.showAnimation(light.sparkleAnimation, 500)
})
light.pixels7.setAll(0xff0000);
light.pixels7.startBrightnessTransition(0, 80, 1000, -1, true);
