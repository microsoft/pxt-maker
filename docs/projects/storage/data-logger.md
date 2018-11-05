# Data logger

This example uses the ``data-logger`` library to sample the ``A0`` reading and write it to ``log.csv``.

```blocks
datalogger.setSampleInterval(100)
forever(function () {
    datalogger.addRow()
    datalogger.addValue("a0", pins.A0.analogRead())
})
```

```package
data-logger
```

```config
feature=uf2
feature=pina0
feature=storage
```
