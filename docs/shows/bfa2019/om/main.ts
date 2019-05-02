// omega

// hardware
const tattoo = jacdac.touchButtonsClient;
const servo2 = servos.servo2;
const servo3 = servos.servo3;
const drift2 = -5;
const drift3 = 3;

const duration = 3000;

// actions
let idle = true;
let isup = false;
function toggle() {
    if (!idle) return;

    idle = false;
    if (!isup) {
        moveUp();
    } else {
        moveDown();
    }
    pause(duration);
    stop();
    isup = !isup;
    idle = true;
}
function down() {
    if (idle && isup) {
    }
}

function moveUp() {
    servo2.run(drift2 + 100);
    servo3.run(drift3 + 100);
}

function moveDown() {
    servo2.run(drift2 - 100);
    servo3.run(drift3 - 100);
}

function stop() {
    servo2.run(drift2 + 0);
    servo3.run(drift3 + 0);
}

// events
tattoo.onEvent(0, JDButtonEvent.Down, function () {
    toggle();
})
tattoo.onEvent(2, JDButtonEvent.Down, function () {
    moveUp();
});
tattoo.onEvent(2, JDButtonEvent.Up, function () {
    stop();
})
tattoo.onEvent(3, JDButtonEvent.Down, function () {
    moveDown();
})
tattoo.onEvent(3, JDButtonEvent.Up, function () {
    stop();
})
