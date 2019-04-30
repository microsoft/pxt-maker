if (!jacdac.identification)
    jacdac.identification = new jacdac.JDGPIOIdentification(pins.LED);

// start exposing light detection service
jacdac.consoleService();
jacdac.lightSpectrumSensorService.start();