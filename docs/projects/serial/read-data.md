# Read data

Read data until a delimiter is found.

```blocks
let line: string = null;
forever(function () {
    line = serial.readUntil(Delimiters.NewLine)
    console.log(line)
})
```

```package
serial
```