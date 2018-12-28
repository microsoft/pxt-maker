# Graph

Display a graph of random values on the screen

```typescript
forever(function () {
    display.graph(Math.randomRange(1, 6))
})
```

```config
feature=uf2
feature=screen
```
```package
screen---st7735
display
```