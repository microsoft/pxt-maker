if (!jacdac.identification)
    jacdac.identification = new jacdac.JDGPIOIdentification(pins.LED);

// enable some services
jacdac.consoleService();
jacdac.accelerometerService.start();
jacdac.pixelsService.start();
jacdac.pixels2Service.start();
jacdac.pixels3Service.start();
jacdac.pixels5Service.start();
jacdac.pixels6Service.start();
jacdac.pixels7Service.start();
