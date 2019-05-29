# Console Screen

## ~ hint

JACDAC  is a single wire broadcast protocol for the plug and play of microcontrollers (MCUs) within the contexts of rapid prototyping, making, and physical computing. [Read more...](https://jacdac.org/).

## ~

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
jacdac.consoleService()
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