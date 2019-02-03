# Custom

Attach a serial device to different pins.

```typescript
const ser = serial.createSerial(pins.D3, pins.D2);
forever(function () {
	ser.writeLine("hello")
    pause(500)
})

```

```package
serial
```