# LoRa Sender

Sending hello in a loop over LoRaWan.

```blocks
forever(function() {
    lora.sendString("hello");
    pause(500);
})
```

```config
feature=lora
```

```package
lora
```