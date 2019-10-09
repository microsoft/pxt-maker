# Console

## ~ hint

JACDAC  is a single wire broadcast protocol for the plug and play of microcontrollers (MCUs) within the contexts of rapid prototyping, making, and physical computing. [Read more...](https://jacdac.org/).

## ~

Enable console logging service over JACDAC. Use the [JACDAC debugger](https://jacdac.org/debug) to view the messages using WebUSB.

```blocks
jacdac.instance().setDeviceName("thing")
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