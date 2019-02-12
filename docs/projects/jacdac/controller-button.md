# Controller Button

Binds the behavior of a button to the JACDAC controller client button. Connects directly to an arcade game.

```blocks
/**
JACDAC is still in early prototyping phase. The protocol and all hardware design are MOST LIKELY to change during this phase. You are welcome to join us in prototyping but we strongly recommend avoiding going to production with JACDAC at the current stage.
**/

jacdac.attachButtonToController(input.buttonD1, JDControllerButton.A)
```

```package
jacdac
buttons
```

```config
feature=uf2
feature=buttond1
feature=jacdac
```