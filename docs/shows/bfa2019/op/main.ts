// Q

// hardware
const lights = light.pixels;
lights.setBrightness(255);
lights.setLength(288)
const lights2 = light.pixels2;
lights2.setBrightness(25);
lights2.setLength(120)

lights2.startBrightnessTransition(200, 0, 1000, -1, false,
    new light.EasingBrightnessTransition(easing.outCubic)
);

let sparkle = new light.SparkleAnimation(0xff,0,0, 30);

forever(function() {
    lights.showAnimation(sparkle, 500);
})
