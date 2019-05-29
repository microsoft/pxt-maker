# Blinky

## ~ hint

JACDAC  is a single wire broadcast protocol for the plug and play of microcontrollers (MCUs) within the contexts of rapid prototyping, making, and physical computing. [Read more...](https://jacdac.org/).

## ~

When pressing button A, the light client sends a command to the light service running
on the other device to turn the lights on for 1/2 second. 

```blocks
jacdac.pixelService.start()
forever(function () {
    jacdac.pixelClient.setColor(0xff0000)
    pause(500)
    jacdac.pixelClient.setColor(0x000000)
    pause(500)
})
```

```package
jacdac
jacdac-drivers
```

```config
feature=uf2
feature=pixel
feature=jacdac
```