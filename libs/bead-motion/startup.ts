if (!jacdac.identification)
    jacdac.identification = new jacdac.JDGPIOIdentification(pins.LED);

// start exposing accelerometer
jacdac.consoleService();
jacdac.accelerometerService.start();