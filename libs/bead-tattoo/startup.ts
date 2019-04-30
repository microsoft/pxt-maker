// start exposing accelerometer + touch
if (!jacdac.identification)
    jacdac.identification = new jacdac.JDGPIOIdentification(pins.LED);

jacdac.consoleService();
//jacdac.accelerometerService.start();
jacdac.touchA0.start();
jacdac.touchA1.start();
jacdac.touchA2.start();
jacdac.touchA3.start();
jacdac.touchA4.start();
jacdac.touchA5.start();
