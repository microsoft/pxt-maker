# Console

Display the console output on a screen.

```typescript
input.buttonD0.onEvent(ButtonEvent.Click, function () {
    console.log("hello")
})
display.showConsole()
console.log("press button to")
console.log("say hello")
```

```config
feature=uf2
feature=screen
feature=buttond1
```
```package
screen---st7735
display
```