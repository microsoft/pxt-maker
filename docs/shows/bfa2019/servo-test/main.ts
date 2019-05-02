const tattoo = jacdac.touchButtonsClient;
const servo2 = servos.servo2;
const servo3 = servos.servo3;
const l = light.pixels5;

let drift1 = -5;
let drift2 = 3;
//l.setAll(0x00ffff)


tattoo.onEvent(0, JDButtonEvent.Down, function() {
    servo2.run(80 + drift1);
    servo3.run(80 + drift2);
//    l.setAll(0xff0000)
})
tattoo.onEvent(1, JDButtonEvent.Down, function() {
    servo2.run(0 + drift1);
    servo3.run(0 + drift2);
  //  l.setAll(0x0000ff)
})
tattoo.onEvent(2, JDButtonEvent.Down, function() {
    servo2.run(-80 + drift1);
    servo3.run(-80 + drift2);
    //l.setAll(0x00ff00)
})
