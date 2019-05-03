// UP

// hardware
const tattoo = jacdac.touchButtonsClient;
const lights = light.pixels;
lights.setBrightness(200);
lights.setLength(50);


function interpolateColor(color1: number, color2: number, factor: number) {
    //  factor = easing.inOutCubic(factor);
      let r1 = color1 >> 16
      let r2 = color2 >> 16
      let g1 = (color1 & 0xff00) >> 8
      let g2 = (color2 & 0xff00) >> 8
      let b1 = color1 & 0xff
      let b2 = color2 & 0xff
      let r = (r1 + factor * (r2 - r1)) | 0x00
      let g = (g1 + factor * (g2 - g1)) | 0x00
      let b = (b1 + factor * (b2 - b1)) | 0x00
      return (r << 16) | (g << 8) | b;
  };
  // My function to interpolate between two colors completely, returning an array
  function interpolateColors(color1: number, color2: number, steps: number, i: number) {
      let stepFactor = i / (steps - 1);
      return interpolateColor(color1, color2, stepFactor);
  }
  
  
  function pulse() {
      let mid = lights.length()>>1
      for (let i = 0; i < mid; i++) {
          lights.setPixelColor(i, interpolateColors(0xff0000, 0x0000FF, mid, i))
      }
      for (let i = 0; i < mid; i++) {
          lights.setPixelColor(i+mid, interpolateColors(0x0000FF, 0xFF0000, mid, i))
      }
      lights.show();
      lights.startBrightnessTransition(96, 16, 800, 1, true,
          new light.EasingBrightnessTransition(easing.inOutCubic));
  }

  
// events
tattoo.onEvent(2, JDButtonEvent.Down, function () {
    pulse();
})