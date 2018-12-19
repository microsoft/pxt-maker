# Blinky

sdufsoui

```blockspxt 
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