// blinky
let on = false;
forever(function() {
    pins.LED.digitalWrite(on = !on);
    pause(250)
})
