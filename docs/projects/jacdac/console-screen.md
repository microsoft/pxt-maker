# Console Screen

Displays the JACDAC console log on a TFT screen.

```blocks
let logging = false
input.buttonD1.onEvent(ButtonEvent.Click, function () {
    if (logging) {
        jacdac.consoleService.setMode(JDConsoleMode.Off)
        logging = false
        console.log("console off")
    } else {
        jacdac.consoleService.setMode(JDConsoleMode.Listen)
        logging = true
        console.log("console on")
    }
})
jacdac.setDeviceName("logger")
jacdac.consoleService.start()
logging = false
display.showConsole()
console.log("press btn to start")
console.log("jacdac console")
```

```package
jacdac
screen---st7735
display
```

```config
feature=uf2
feature=buttond1
feature=screen
feature=jacdac
```