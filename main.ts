input.onButtonPressed(Button.A, function () {
    hummingbird.setPositionServo(FourPort.One, 90)
    hummingbird.setPositionServo(FourPort.Two, 90)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    music.playMelody("- - - - - - - - ", 120)
})
input.onButtonPressed(Button.B, function () {
    hummingbird.setPositionServo(FourPort.One, 0)
    hummingbird.setPositionServo(FourPort.Two, 0)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    music.playMelody("- - - - - - - - ", 120)
})
hummingbird.startHummingbird()
