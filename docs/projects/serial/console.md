# Console

Sends the console output to the serial and says hello forever

```blocks
serial.attachToConsole()
forever(function () {
	console.log("hello")
    pause(500)
})

```

```package
serial
```