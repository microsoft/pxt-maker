# Shake

Use an accelerometer to detect when the device is shaken.

```blocks
input.onGesture(Gesture.Shake, function() {
    pins.D0.digitalWrite(true);
    pause(500);
    pins.D0.digitalWrite(false);
})
```

```config
feature=uf2
feature=accelerometer
feature=pind0
```

```package
accelerometer
```