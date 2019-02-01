//forever(function() {
//    console.log('ping');
//   control.dmesg('DBUG LOG BABY')
//})
control.dmesg('test init')
input.onGesture(Gesture.Shake, function() {
    control.dmesg('test shake')

})
pause(100)
control.dmesg('test done')
