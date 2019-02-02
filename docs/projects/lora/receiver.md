# LoRa Sender

Read packets in a loop over LoRaWan.

```blocks
forever(function() {
    console.log(lora.readString());
})
```

```config
feature=lora
```

```package
lora
```