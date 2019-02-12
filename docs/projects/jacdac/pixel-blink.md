# Blinky

When pressing button A, the light client sends a command to the light service running
on the other device to turn the lights on for 1/2 second. 

```blocks
/**
JACDAC is still in early prototyping phase. The protocol and all hardware design are MOST LIKELY to change during this phase. You are welcome to join us in prototyping but we strongly recommend avoiding going to production with JACDAC at the current stage.
**/
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