namespace jacdac {
    //% fixedInstance
    export const servosClient = new jacdac.ServosClient("servos", 2);
}

const tattoo = jacdac.touchButtonsClient;
const ser = jacdac.servosClient;

light.pixels.setAll(0x00ffff)
for(let i = 0; i < 2; ++i) {
    ser.setAngle(0, 180)
    pause(100)
    ser.setAngle(0, 0);
    pause(2000)
}
ser.setAngle(0, 90);
ser.setAngle(1, 90);

tattoo.onEvent(0, JDButtonEvent.Down, function() {
    ser.setAngle(0, 180);
    ser.setAngle(1, 180);
    light.pixels.setAll(0xff0000)
})
tattoo.onEvent(1, JDButtonEvent.Down, function() {
    ser.setAngle(0, 0);
    ser.setAngle(1, 0);
    light.pixels.setAll(0x0000ff)
})
tattoo.onEvent(2, JDButtonEvent.Down, function() {
    ser.setAngle(0, 90);
    ser.setAngle(1, 90);
    light.pixels.setAll(0x00ff00)
})
