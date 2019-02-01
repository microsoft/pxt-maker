# Lora Sender

Sending hello in a loop over LoRaWan.

```blocks
forever(function() {
    lora.send("hello");
    pause(500);
})
```

```config
feature=lora
```

```package
lora
```