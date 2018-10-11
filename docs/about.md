# About

The **Maker Microsoft MakeCode editor** allows to program [various Cortex-based microcontrollers](/boards).

* [Add a new board](/boards/add-a-new-board)

## Programming: [Blocks](/blocks) or [JavaScript](/javascript)

You can program the @boardname@ using [Blocks](/blocks) or [JavaScript](/javascript) in your web browser.

```blocks
forever(function() {
    pins.LED.digitalWrite(true)
    pause(500)
    pins.LED.digitalWrite(false)
    pause(500)    
})
```

```typescript
forever(function() {
    pins.LED.digitalWrite(true)
    pause(500)
    pins.LED.digitalWrite(false)
    pause(500)    
})
```


The editor work in [most modern browsers](/browsers), work [offline](/offline) once loaded and do not require any installation.

## [Compile and Flash: Your Program!](/device/usb)

When you have your code ready, you connect your @boardname@ to a computer via a USB cable
**then press the reset button** so it appears as a mounted drive (named @boardname@).

Compilation to machine code from [Blocks](/blocks) or [JavaScript](/javascript) happens in the browser. You save the binary
program to a **.uf2** file, which you then copy to the @boardname@ drive, which flashes the device with the new program.

## Simulator: Test Your Code

You can run your code using the Metro Express simulator, all within the confines of a web browser.

```sim
forever(function() {
    pins.LED.digitalWrite(true)
    pause(500)
    pins.LED.digitalWrite(false)
    pause(500)    
})
```

## Open Source

Maker is open source on GitHub at https://github.com/Microsoft/pxt-maker .