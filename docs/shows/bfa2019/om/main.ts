// omega

// hardware
const tattoo = jacdac.touchButtonsClient;
const servos = new jacdac.ServosClient("servoes", 2);
const duration = 3000;

// actions
enum State {
    Idle,
    Up,
    Down
}
let state = State.Idle;
function up() {
    if (state == State.Idle) {
        state = State.Up;
        servos.run(0, 50);
        servos.run(1, 50);
        pause(duration);
        state = State.Idle;
    }
}
function down() {
    if (state == State.Idle) {
        state = State.Down;
        servos.run(0, -50);
        servos.run(1, -50);
        pause(duration);
        state = State.Idle;
    }
}

// events
tattoo.onEvent(0, JDButtonEvent.Down, function () {
    up();
})
tattoo.onEvent(1, JDButtonEvent.Down, function () {
    down();
})
