# Blinky

When pressing button A, the light client sends a command to the light service running
on the other device to turn the lights on for 1/2 second. 

```blocks
input.buttonA.onEvent(ButtonEvent.Pressed, function() {
    jacdac.lightClient.setAll(0xff0000);
    pause(500)
    jacdac.lightClient.setAll(0x000000);
});
```

```package
jacdac
jacdac-drivers
```

```config
feature=uf2
feature=pinled
feature=jacdac
```