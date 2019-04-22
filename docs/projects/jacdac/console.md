# Console

Enable console logging service over JACDAC. Use the [console screen](/projects/jacdac/console-screen) to view the messages.

```blocks
/**
JACDAC is still in early prototyping phase. The protocol and all hardware design are MOST LIKELY to change during this phase. You are welcome to join us in prototyping but we strongly recommend avoiding going to production with JACDAC at the current stage.
**/

jacdac.setDeviceName("thing")
jacdac.consoleService()
forever(function() {
    console.log("ping");
    pause(1000);
})
```

```package
jacdac
```

```config
feature=uf2
feature=jacdac
```