forever(function() {
    pins.LED.digitalWrite(true);
    pause(500)
    pins.LED.digitalWrite(false);
    pause(500)
})
