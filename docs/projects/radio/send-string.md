# Send String

Sends a string over the Bit Radio protocol

```blocks
radio.setGroup(42)
radio.onReceivedString(function (receivedString) {
    console.log(receivedString)
})
forever(function () {
    radio.sendString(":)")
})
```


```package
radio
```

```config
feature=radio
```