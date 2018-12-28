# Console

Display the console output on a screen.

```typescript
input.buttonD0.onEvent(ButtonEvent.Click, function () {
    console.log("hello")
})
display.showConsole()
```

```config
feature=uf2
feature=screen
feature=buttond0
```
```package
screen---st7735
display
```