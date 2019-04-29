if (!jacdac.identification)
    jacdac.identification = new jacdac.JDGPIOIdentification(pins.LED);

// start exposing accelerometer
jacdac.consoleService();
jacdac.accelerometerService.start();
jacdac.servoA1Service.start();
jacdac.servoA2Service.start();
