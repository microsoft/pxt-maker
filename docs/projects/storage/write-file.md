# Write File

This example takes the reading of analog pin ``A1`` and stores it into ``log.txt``.

```blocks
forever(function () {
    storage.appendLine("log.txt", "a1:" + pins.A1.analogRead())
    pause(2000)
})
```

```package
storage
```

```config
feature=uf2
feature=pina1
feature=storage
```
