pins.D13.digitalWrite(true);

let on = false;
loops.pause(1000);

for(let i = 1000; i > 0; i -= 50) {
    pins.D13.digitalWrite(on = !on);
    music.playTone(440, i)
}

for(let i = 0; i < 1000; i += 20){
    pins.D13.digitalWrite(on = !on);
    music.playTone(440, i)
}
