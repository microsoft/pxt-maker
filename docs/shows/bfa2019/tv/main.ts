// TV

// hardware
const lights1 = light.pixels;
const lights2 = light.pixels2;
const lightsShoulders = light.pixels7;

// letters
lights1.setLength(30);
lights1.setBrightness(200);
lights1.setAll(0x0000FF);
lights2.setLength(42);
lights2.setBrightness(200);
lights2.setAll(0x0000FF);

//shoulders
lightsShoulders.setLength(40);
lightsShoulders.setBrightness(200)
lightsShoulders.clear();
const sparkle5 = new light.SparkleAnimation(0x60, 0x60, 0xff, 20);
forever(() => { lightsShoulders.showAnimation(sparkle5, 60000) });
//     lights5.move(LightMove.Rotate);
//     lights6.move(LightMove.Rotate);
//  });