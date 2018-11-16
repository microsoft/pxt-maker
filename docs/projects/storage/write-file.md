# Write File

This example takes the reading of analog pin ``A0`` and stores it into ``log.txt``.

```blocks
forever(function () {
    storage.appendLine("log.txt", "a0:" + pins.A0.analogRead())
    pause(2000)
})
```

```package
storage
```

```config
feature=uf2
feature=pina0
feature=storage
```
