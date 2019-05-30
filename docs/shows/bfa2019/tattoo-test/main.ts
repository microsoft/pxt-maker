//
jacdac.touchButtonsClient.onEvent(0, JDButtonEvent.Click, function () {
    light.pixels.setAll(0xff0000)
})
jacdac.touchButtonsClient.onEvent(1, JDButtonEvent.Down, function () {
    light.pixels.setAll(0x00ff00)
})
jacdac.touchButtonsClient.onEvent(1, JDButtonEvent.Up, function () {
    light.pixels.setAll(0x0000ff)
})
jacdac.touchButtonsClient.onEvent(2, JDButtonEvent.LongClick, function () {
    light.pixels.setAll(0x00ffff)
})
input.onGesture(Gesture.Shake, function () {
    light.pixels.showAnimation(light.rainbowAnimation, 500)
})
