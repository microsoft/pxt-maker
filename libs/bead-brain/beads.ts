/**
 * Bead stuff
 */
//% color=#0c0c00 icon="\uf111" weight=100 color="#bb4aac" weight=100
//% groups='["Motion", "Light Sensor" "Light"]'
namespace beads {
    //% fixedInstances
    export class Bead {
        private _name: string;
        private _client: jacdac.Client;

        constructor(name: string, client: jacdac.Client) {
            this._name = name;
            this._client = client;
        }

        get name() {
            return this._name;
        }

        get clientName() {
            return this._client.name;
        }

        get client() {
            return this._client;
        }
    }

    /**
     * A motion detector bead
     */
    //% fixedInstances
    export class MotionBead extends Bead {
        constructor(name: string) {
            super(name, new jacdac.AccelerometerClient("acc"));
        }

        /**
         * Registers code to run when a bead is run
         * @param gesture 
         * @param handler 
         */
        //% blockId=motionbeadongesture block="on %bead %gesture"
        //% group="Motion"
        onGesture(gesture: JDGesture, handler: () => void) {
            const c = this.client as jacdac.AccelerometerClient;
            c.onEvent(gesture, handler);
        }
    }

    /**
     * Motion bead called `motion1` attached to the garment
     */
    //% fixedInstance whenUsed block="motion 1"
    export const motion1 = new MotionBead("mo1");
    /**
     * Motion bead called `motion2` attached to the garment
     */
    //% fixedInstance whenUsed block="motion 1"
    export const motion2 = new MotionBead("mo2");

    /**
     * A servo bead
     */
    //% fixedInstances
    export class ServoBead extends Bead {
        constructor(name: string, serviceName: string) {
            super(name, new jacdac.ServoClient(serviceName));
        }

        /**
         * Set the servo angle
         */
        //% weight=100 help=servos/set-angle
        //% blockId=beadservoservosetangle block="set %servo angle to %degrees=protractorPicker °"
        //% degrees.defl=90
        //% servo.fieldEditor="gridpicker"
        //% servo.fieldOptions.width=220
        //% servo.fieldOptions.columns=2
        //% blockGap=8
        //% parts=microservo trackArgs=0
        //% group="Servos"
        setAngle(degrees: number) {
            const client = this.client as jacdac.ServoClient;
            client.setAngle(degrees);
        }
    }

    /**
     * A servo bead
     */
    //% fixedInstance block="servo 1"
    export const servo1Servo1 = new ServoBead("ser1", "ser1");

    /**
     * A servo bead
     */
    //% fixedInstance block="servo 2"
    export const servo1Servo2 = new ServoBead("ser1", "ser2");

    /**
     * A servo bead
     */
    //% fixedInstance block="servo 1"
    export const servo2Servo1 = new ServoBead("ser2", "ser1");

    /**
     * A servo bead
     */
    //% fixedInstance block="servo 2"
    export const servo2Servo2 = new ServoBead("ser2", "ser2");

    /**
     * A programmable light bead
     */
    //% fixedInstances
    export class LightBead extends Bead {
        constructor(name: string, serviceName: string) {
            super(name, new jacdac.LightClient(serviceName));
        }

        /**
         * Set all of the pixels on the strip to one RGB color.
         * @param rgb RGB color of the LED
         */
        //% blockId="beadlight_set_strip_color" block="set %strip all pixels to %rgb=colorNumberPicker"
        //% weight=80 blockGap=8
        //% group="Light"
        setAll(rgb: number) {
            const c = this.client as jacdac.LightClient;
            c.setAll(rgb);
        }

        /**
         * Show an animation or queue an animation in the animation queue
         * @param animation the animation to run
         * @param duration the duration to run in milliseconds, eg: 500
         */
        //% blockId=beadlight_show_animation block="show %strip animation %animation for %duration=timePicker ms"
        //% weight=90 blockGap=8
        //% group="Light"
        showAnimation(animation: JDLightAnimation, duration: number) {
            const c = this.client as jacdac.LightClient;
            c.showAnimation(animation, 500)
        }
    }

    /**
     * Any light bead attached to the garment
     */
    //% fixedInstance whenUsed block="brain 1 pixels 1"
    export const brain1Pixels1 = new LightBead("brain1", "pix");
    /**
     * Any light bead attached to the garment
     */
    //% fixedInstance whenUsed block="brain 1 pixels 2"
    export const brain1Pixels2 = new LightBead("brain1", "pix2");
    /**
     * Any light bead attached to the garment
     */
    //% fixedInstance whenUsed block="brain 1 pixels 3"
    export const brain1Pixels3 = new LightBead("brain1", "pix3");
    /**
     * Any light bead attached to the garment
     */
    //% fixedInstance whenUsed block="brain 1 pixels 4"
    export const brain1Pixels4 = new LightBead("brain1", "pix4");
    /**
     * Any light bead attached to the garment
     */
    //% fixedInstance whenUsed block="brain 2 pixels 1"
    export const brain2Pixels1 = new LightBead("brain2", "pix");
    /**
     * Any light bead attached to the garment
     */
    //% fixedInstance whenUsed block="brain 2 pixels 2"
    export const brain2Pixels2 = new LightBead("brain2", "pix2");
    /**
     * Any light bead attached to the garment
     */
    //% fixedInstance whenUsed block="brain 2 pixels 3"
    export const brain2Pixels3 = new LightBead("brain2", "pix3");
    /**
     * Any light bead attached to the garment
     */
    //% fixedInstance whenUsed block="brain 2 pixels 4"
    export const brain2Pixels4 = new LightBead("brain2", "pix4");
}