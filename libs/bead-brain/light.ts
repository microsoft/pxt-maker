namespace light {
    /**
     * Gets the light strip attached to jack connector 2 (J17)
     */
    //% fixedInstance whenUsed block="pixels 2"
    export const pixels2 = light.createStrip(pins.A2, 30);
    /**
     * Gets the light strip attached to jack connector 3 (J18)
     */
    //% fixedInstance whenUsed block="pixels 3"
    export const pixels3 = light.createStrip(pins.A3, 30);
    /**
     * Gets the light strip attached to jack connector 5 (J18)
     */
    //% fixedInstance whenUsed block="pixels 5"
    export const pixels5 = light.createStrip(pins.A5, 30);
    /**
     * Gets the light strip attached to jack connector 6 (J18)
     */
    //% fixedInstance whenUsed block="pixels 6"
    export const pixels6 = light.createStrip(pins.A6, 30);
    /**
     * Gets the light strip attached to jack connector 7 (J18)
     */
    //% fixedInstance whenUsed block="pixels 7"
    export const pixels7 = light.createStrip(pins.A7, 30);
}

namespace jacdac {
    /**
     * Gets the jacdac service for the pixels light strip
     */
    //% fixedInstance whenUsed block="pixels service"
    export const pixelsService = new LightService("pix", light.pixels);

    /**
     * Gets the jacdac service for the pixels2 light strip
     */
    //% fixedInstance whenUsed block="pixels2 service"
    export const pixels2Service = new LightService("pix2", light.pixels2);

    /**
     * Gets the jacdac service for the pixels3 light strip
     */
    //% fixedInstance whenUsed block="pixels3 service"
    export const pixels3Service = new LightService("pix3", light.pixels3);

    /**
     * Gets the jacdac service for the pixels5 light strip
     */
    //% fixedInstance whenUsed block="pixels5 service"
    export const pixels5Service = new LightService("pix5", light.pixels5);

    /**
     * Gets the jacdac service for the pixels6 light strip
     */
    //% fixedInstance whenUsed block="pixels6 service"
    export const pixels6Service = new LightService("pix6", light.pixels6);

    /**
     * Gets the jacdac service for the pixels7 light strip
     */
    //% fixedInstance whenUsed block="pixels7 service"
    export const pixels7Service = new LightService("pix7", light.pixels7);

    /**
     * Start all JACDAC services
     */
    //% blockId="jd_bead_bread_start_services" block="jacdac start servies"
    export function startServices() {
        jacdac.consoleService.start();
        jacdac.accelerationService.start();
        jacdac.pixelsService.start();
        jacdac.pixels2Service.start();
        jacdac.pixels3Service.start();
        jacdac.pixels5Service.start();
        jacdac.pixels6Service.start();
        jacdac.pixels7Service.start();        
    }
}