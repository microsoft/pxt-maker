# Console

Enable console logging service over JACDAC. Use the [console screen](/projects/jacdac/console-screen) to view the messages.

```blocks
jacdac.setDeviceName("thing")
jacdac.consoleService.start()
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