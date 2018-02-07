# Blinky

Learn the basics of the editor with a classic Blinky program!

## Let there be light

Turn on the builtin LED by enabling pin ``D13``.

The board has a built-in LED that is attached to the pin ``D13``.
Using the ``digitalWrite`` block, we enable current through that pin
that turns on the LED.

```blocks
pins.D13.digitalWrite(true)
```

## Download your code

Click on the ``Download`` button and follow the on-screen instructions
to get your code on the board.

## Pause and off

Turn off the light after ``100`` milliseconds.

```blocks
pins.D13.digitalWrite(true)
loops.pause(100)
pins.D13.digitalWrite(false)
```

## Download your code

Click on the ``||Download||`` button and follow the on-screen instructions
to get your code on the board.

## Rinse and repeat

Place a ``loops.forever`` block on the canvas and drag
your blocks over from ``on start``.

```blocks
loops.forever(function() {
    pins.D13.digitalWrite(true)
    loops.pause(100)
    pins.D13.digitalWrite(false)
})
```

## Download your code

Click on the ``||Download||`` button and follow the on-screen instructions
to get your code on the board.

## Keep it off

Add a pause to keep the LED off.

```blocks
loops.forever(function() {
    pins.D13.digitalWrite(true)
    loops.pause(100)
    pins.D13.digitalWrite(false)
    loops.pause(100)    
})
```

## Download your code

Click on the ``Download`` button and follow the on-screen instructions
to get your code on the board.

```package
arduino-zero
```