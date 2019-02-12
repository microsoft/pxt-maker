# Data logger

This example uses the ``data-logger`` library to sample the ``A0`` reading and write it to ``log.csv``.

```blocks
datalogger.setSampleInterval(100)
forever(function () {
    datalogger.addRow()
    datalogger.addValue("a1", pins.A1.analogRead())
})
```

```package
datalogger
```

```config
feature=uf2
feature=pina1
feature=storage
```
