/**
 * Well known colors for a NeoPixel strip
 */
enum PixelColors {
    //% block=red blockIdentity=pixel.colors
    Red = 0xFF0000,
    //% block=orange blockIdentity=pixel.colors
    Orange = 0xFF7F00,
    //% block=yellow blockIdentity=pixel.colors
    Yellow = 0xFFFF00,
    //% block=green blockIdentity=pixel.colors
    Green = 0x00FF00,
    //% block=blue blockIdentity=pixel.colors
    Blue = 0x0000FF,
    //% block=indigo blockIdentity=pixel.colors
    Indigo = 0x4b0082,
    //% block=violet blockIdentity=pixel.colors
    Violet = 0x8a2be2,
    //% block=purple blockIdentity=pixel.colors
    Purple = 0xA033E5,
    //% block=pink blockIdentity=pixel.colors
    Pink = 0xFF007F,
    //% block=white blockIdentity=pixel.colors
    White = 0xFFFFFF,
    //% block=black  blockIdentity=pixel.colors
    Black = 0x000000
}

/**
 * Functions to operate on-board color LED (if any).
 */
//% weight=100 color="#0078d7" icon="\uf00a"
namespace pixel {
    let brightness = 20;

    /**
     * Set the on-board pixel to a given color.
     * @param color RGB color of the LED
     */
    //% blockId="pixel_set_pixel" block="set pixel color %rgb=pixel_colors"
    //% weight=99
    //% blockGap=8
    //% parts="neopixel"
    export function setColor(color: number): void {
        if (brightness < 255)
            color = fade(color, brightness);

        let red = unpackR(color);
        let green = unpackG(color);
        let blue = unpackB(color);

        const buffer: Buffer = pins.createBuffer(3);
        buffer[0] = green;
        buffer[1] = red;
        buffer[2] = blue;

        pixel.sendBuffer(buffer);
    }

    /**
     * Get the RGB value of a known color
    */
    //% blockId=pixel_colors block="%color"
    //% weight=20
    //% blockGap=8
    //% shim=TD_ID
    export function colors(color: PixelColors): number {
        return color;
    }

    /**
     * Set the brightness of the neopixel. This flag only applies to future operations.
     * @param brightness a measure of LED brightness in 0-255. eg: 20
     */
    //% blockId="pixel_set_brightness" block="set brightness %brightness"
    //% weight=98
    //% parts="neopixel"
    //% brightness.min=0 brightness.max=255
    export function setBrightness(brightness: number): void {
        this._brightness = Math.max(0, Math.min(0xff, brightness >> 0));
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% blockId="pixel_rgb" block="red %red|green %green|blue %blue"
    //% red.min=0 red.max=255 green.min=0 green.max=255 blue.min=0 blue.max=255
    //% weight=19
    //% blockGap=8
    export function rgb(red: number, green: number, blue: number): number {
        return ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF);
    }

    /**
     * Fade the color by the brightness
     * @param color color to fade
     * @param brightness the amount of brightness to apply to the color, eg: 128
     */
    //% blockId="pixel_fade" block="fade %color=pixel_colors|by %brightness"
    //% brightness.min=0 brightness.max=255
    //% weight=18
    //% blockGap=8
    export function fade(color: number, brightness: number): number {
        brightness = Math.max(0, Math.min(255, brightness >> 0));
        if (brightness < 255) {
            let red = unpackR(color);
            let green = unpackG(color);
            let blue = unpackB(color);

            red = (red * brightness) >> 8;
            green = (green * brightness) >> 8;
            blue = (blue * brightness) >> 8;

            color = rgb(red, green, blue);
        }
        return color;
    }

    /**
     * Convert an HSV (hue, saturation, value) color to RGB
     * @param hue value of the hue channel between 0 and 255. eg: 255
     * @param sat value of the saturation channel between 0 and 255. eg: 255
     * @param val value of the value channel between 0 and 255. eg: 255
     */

    //% blockId="pixel_hsv" block="hue %hue|sat %sat|val %val"
    //% hue.min=0 hue.max=255 sat.min=0 sat.max=255 val.min=0 val.max=255
    //% weight=17
    export function hsv(hue: number, sat: number, val: number): number {
        let h = (hue % 255) >> 0;
        if (h < 0) h += 255;
        // scale down to 0..192
        h = (h * 192 / 255) >> 0;

        //reference: based on FastLED's hsv2rgb rainbow algorithm [https://github.com/FastLED/FastLED](MIT)
        let invsat = 255 - sat;
        let brightness_floor = ((val * invsat) / 255) >> 0;
        let color_amplitude = val - brightness_floor;
        let section = (h / 0x40) >> 0; // [0..2]
        let offset = (h % 0x40) >> 0; // [0..63]

        let rampup = offset;
        let rampdown = (0x40 - 1) - offset;

        let rampup_amp_adj = ((rampup * color_amplitude) / (255 / 4)) >> 0;
        let rampdown_amp_adj = ((rampdown * color_amplitude) / (255 / 4)) >> 0;

        let rampup_adj_with_floor = (rampup_amp_adj + brightness_floor);
        let rampdown_adj_with_floor = (rampdown_amp_adj + brightness_floor);

        let r: number;
        let g: number;
        let b: number;
        if (section) {
            if (section == 1) {
                // section 1: 0x40..0x7F
                r = brightness_floor;
                g = rampdown_adj_with_floor;
                b = rampup_adj_with_floor;
            } else {
                // section 2; 0x80..0xBF
                r = rampup_adj_with_floor;
                g = brightness_floor;
                b = rampdown_adj_with_floor;
            }
        } else {
            // section 0: 0x00..0x3F
            r = rampdown_adj_with_floor;
            g = rampup_adj_with_floor;
            b = brightness_floor;
        }
        return rgb(r, g, b);
    }

    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb >> 0) & 0xFF;
        return b;
    }
}