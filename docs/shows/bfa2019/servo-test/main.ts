namespace jacdac {
    //% fixedInstance
    export const servosClient = new jacdac.ServosClient("servos", 2);
}

const tattoo = jacdac.touchButtonsClient;

tattoo.onEvent(0, JDButtonEvent.Down, function() {
    jacdac.servosClient.run(0, 100);
})
tattoo.onEvent(1, JDButtonEvent.Down, function() {
    jacdac.servosClient.run(0, -100);
})
tattoo.onEvent(2, JDButtonEvent.Down, function() {
    jacdac.servosClient.run(0, 0);
})
