// JG

// hardware
const tattoo = jacdac.touchButtonsClient;
const lights = light.pixels;
lights.setBrightness(0);
lights.setLength(120);
lights.setAll(0xFF0000)

  function pulse() {
      lights.startBrightnessTransition(96, 16, 800, 1, true,
          new light.EasingBrightnessTransition(easing.inOutCubic));
  }

  
// events
tattoo.onEvent(2, JDButtonEvent.Down, function () {
    pulse();
})