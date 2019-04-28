if (!jacdac.identification)
    jacdac.identification = new jacdac.JDGPIOIdentification(pins.LED);

// start exposing proximity detection service
jacdac.consoleService();