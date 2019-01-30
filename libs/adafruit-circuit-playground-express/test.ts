pins.LED.digitalWrite(true);
pause(500);
pins.LED.digitalWrite(false);
pause(500);
pins.LED.digitalWrite(true);
pause(500);
// blinky
let on = false;
forever(function() {
    pins.LED.digitalWrite(on = !on);
    pause(250)
})
