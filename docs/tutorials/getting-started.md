# Getting started

### Step 1 @fullscreen

Welcome, let's get started by making the on-board NeoPixel blink! Drag a ``||set pixel color||`` block from the ``Pixel`` drawer into the ``||forever||`` block.

Hint:

```blocks
loops.forever(() => {
    pixel.setColor(PixelColors.Red)
})
```

### Step 2

Next, drag another ``||set pixel color||`` block from the ``Pixel`` drawer, place it below the first block, and change the selected color.
Click the Hint button if you need help!

```blocks
loops.forever(() => {
    pixel.setColor(PixelColors.Red)
    pixel.setColor(PixelColors.Blue)
})
```

### Step 3

Open the ``Loops`` drawer and drag a ``||pause||`` block between the two ``||set pixel color||`` blocks. Set its argument to `1000`.

```blocks
loops.forever(() => {
    pixel.setColor(PixelColors.Red)
    loops.pause(1000)
    pixel.setColor(PixelColors.Blue)
})
```

### Step 4

Open the ``Loops`` drawer and drag another ``||pause||`` below the two ``||set pixel color||`` blocks. Set its argument to `1000` as well.

```blocks
loops.forever(() => {
    pixel.setColor(PixelColors.Red)
    loops.pause(1000)
    pixel.setColor(PixelColors.Blue)
    loops.pause(1000)
})
```

### Step 6

Awesome! Congratulations on completing your first challenge on the @boardname@.

