namespace jacdac {
    //% fixedInstance
    export const servosClient = new jacdac.ServosClient("servos", 2);
}

forever(function () {
    jacdac.servosClient.setAngle(0, 0);
    jacdac.servosClient.setAngle(1, 180);
    pause(1000)
    jacdac.servosClient.setAngle(0, 180);
    jacdac.servosClient.setAngle(1, 135);
    pause(1000)
})
