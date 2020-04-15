# Light lightDemo

Enables various light animation based on sensor triggers.

## Code

```typescript
function startAnimation(strip: light.NeoPixelStrip, animation: light.NeoPixelAnimation) {
    strip.setLength(150);
    strip.stopAllAnimations();
    control.runInBackground(() => {
        strip.showAnimation(animation, 2000);
        strip.clear();
    });
}
function lightDemo() {
    const duration = 2000;
    startAnimation(light.pixels, light.rainbowAnimation);
    startAnimation(light.pixels2, light.sparkleAnimation);
    startAnimation(light.pixels3, light.colorWipeAnimation);
    startAnimation(light.pixels5, light.cometAnimation);
    startAnimation(light.pixels6, light.theaterChaseAnimation);
    startAnimation(light.pixels7, light.runningLightsAnimation);
}
jacdac.proximityClient.onEvent(JDPromixityEvent.Close, function () {
    lightDemo();
})
jacdac.accelerometerClient.onEvent(JDGesture.Shake, function () {
    lightDemo();
})
jacdac.touchButtonClient.onEvent(JDButtonEvent.Click, function () {
    lightDemo();
})
jacdac.lightSpectrumSensorClient.onEvent(JDLightSpectrumEvent.VisibleDark, function () {
    lightDemo();
})
```


```config
feature=brain
```