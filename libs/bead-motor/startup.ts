if (!jacdac.identification)
    jacdac.identification = new jacdac.JDGPIOIdentification(pins.LED);

// start exposing color detection service
jacdac.consoleService();