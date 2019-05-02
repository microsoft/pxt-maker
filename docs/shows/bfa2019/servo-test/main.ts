namespace jacdac {
    //% fixedInstance
    export const servosClient = new jacdac.ServosClient("servos", 2);
}

const tattoo = jacdac.touchButtonsClient;

light.pixels.setAll(0x00ffff)
for(let i = 0; i < 2; ++i) {
    jacdac.servosClient.setAngle(0, 180)
    pause(100)
    jacdac.servosClient.setAngle(0, 0);
    pause(2000)
}
jacdac.servosClient.setAngle(0, 90);
jacdac.servosClient.setAngle(1, 90);

tattoo.onEvent(0, JDButtonEvent.Down, function() {
    jacdac.servosClient.setAngle(0, 180);
    jacdac.servosClient.setAngle(1, 180);
    light.pixels.setAll(0xff0000)
})
tattoo.onEvent(1, JDButtonEvent.Down, function() {
    jacdac.servosClient.setAngle(0, 0);
    jacdac.servosClient.setAngle(1, 0);
    light.pixels.setAll(0x0000ff)
})
tattoo.onEvent(2, JDButtonEvent.Down, function() {
    jacdac.servosClient.setAngle(0, 90);
    jacdac.servosClient.setAngle(1, 90);
    light.pixels.setAll(0x00ff00)
})
