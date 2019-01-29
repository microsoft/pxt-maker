pins.LED.digitalWrite(true);
control.dmesg("start")

forever(function() {
    control.dmesg("on")
    pins.LED.digitalWrite(true);
    pause(500)
    control.dmesg("off")
    pins.LED.digitalWrite(false);
    pause(500)
})
