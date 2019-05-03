// SW

// hardware: too many neopixels, sticks in bootloader mode
const lights = light.pixels;
const lights2 = light.pixels2;
//const lights3 = light.pixels7;

lights.setBrightness(255);
lights.setLength(120);
lights.setBuffered(true);
lights2.setBrightness(255);
lights2.setLength(120);
lights2.setBuffered(true);
// lights3.setBrightness(200);
// lights3.setLength(120);
// lights3.setBuffered(true);

let last = lights.length()-1
  function pulse() {
      lights.clear();
      for (let i = 0; i < 15; i++) {
          lights.setPixelColor(last,0xCC00AA); lights.move(LightMove.Shift,-1); lights.show();
          lights2.setPixelColor(last,0xFFFF00); lights2.move(LightMove.Shift,-1); lights2.show();
          // lights3.setPixelColor(last,0xFFFF00); lights3.move(LightMove.Shift,-1); lights3.show();
          pause(1);
      }
      for (let i = 0; i < lights.length(); i++) {
        lights.move(LightMove.Shift,-1); lights.show();
        lights2.move(LightMove.Shift,-1); lights2.show();
        // lights3.move(LightMove.Shift,-1); lights3.show();
        pause(1);
      }
}


function stepUpdate(): () => boolean {
  let active = true;
  return function() {
      const s = input.acceleration(Dimension.Strength);        
      if (!active && s > 1500) {
          active = true;
          return true;
      } else if (s < 1200) {
          active = false;
      }
      return false;
  }
}

input.onCustomGesture(42, stepUpdate(), pulse); // register

  