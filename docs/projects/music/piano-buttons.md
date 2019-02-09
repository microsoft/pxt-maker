# Piano Buttons

```blocks
input.buttonD0.onEvent(ButtonEvent.Click, function () {
    music.playTone(262, music.beat(BeatFraction.Half))
})
input.buttonD1.onEvent(ButtonEvent.Click, function () {
    music.playTone(294, music.beat(BeatFraction.Half))
})
```

```config
feature=uf2
feature=buttond0
feature=buttond1
feature=music
```