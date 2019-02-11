# Glowy

Turn on and off **gradually** an LED to create a glowing effect.

```blocks
forever(function () {
    for (let i = 0; i <= 10; i++) {
        pins.LED.analogWrite(i * 100)
        pause(100)
    }
    for (let j = 0; j <= 10; j++) {
        pins.LED.analogWrite(1023 - j * 100)
        pause(100)
    }
})
```

```config
feature=uf2
feature=pinled
```
