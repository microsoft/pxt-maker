light.pixels.clear();
forever(function() {
    light.pixels.photonForward(1);
    pixel.setColor(Math.randomRange(0x0f0f0f, 0xffffff))
});
