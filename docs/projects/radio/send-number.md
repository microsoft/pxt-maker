# Send Number

Sends a number over the Bit Radio protocol

```blocks
radio.setGroup(42)
radio.onReceivedNumber(function (receivedNumber) {
    console.logValue("x", receivedNumber)
})
forever(function () {
    radio.sendNumber(Math.randomRange(0, 10))
})
```


```package
radio
```

```config
feature=radio
```