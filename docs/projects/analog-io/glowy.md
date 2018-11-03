# Glowy

Turn on and off **gradually** an LED to create a glowing effect.

```blocks
forever(function () {
    for (let i = 0; i <= 10; i++) {
        pins.A1.analogWrite(i * 100)
        pause(100)
    }
    for (let j = 0; j <= 10; j++) {
        pins.A1.analogWrite(1023 - j * 100)
        pause(100)
    }
})
```
