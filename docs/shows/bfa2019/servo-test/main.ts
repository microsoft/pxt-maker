namespace jacdac {
    //% fixedInstance
    export const servosClient = new jacdac.ServosClient("servos", 2);
}

const tattoo = jacdac.touchButtonsClient;
const servo1 = new servos.PinServo(pins.A2);
const servo2 = new servos.PinServo(pins.A3);
const l = light.pixels5;

let drift1 = -5;
let drift2 = 3;
//l.setAll(0x00ffff)


tattoo.onEvent(0, JDButtonEvent.Down, function() {
    servo1.run(80 + drift1);
    servo2.run(80 + drift2);
//    l.setAll(0xff0000)
})
tattoo.onEvent(1, JDButtonEvent.Down, function() {
    servo1.run(0 + drift1);
    servo2.run(0 + drift2);
  //  l.setAll(0x0000ff)
})
tattoo.onEvent(2, JDButtonEvent.Down, function() {
    servo1.run(-80 + drift1);
    servo2.run(-80 + drift2);
    //l.setAll(0x00ff00)
})
