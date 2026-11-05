input.onButtonPressed(Button.A, function () {
    turtle.pen(TurtlePenMode.Down)
    turtle.setPosition(0, 0)
    turtle.turnRight()
    for (let index = 0; index < 4; index++) {
        turtle.forward(1)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index < 2; index++) {
        turtle.turnRight()
    }
    for (let index = 0; index < 5; index++) {
        turtle.forward(1)
    }
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
    turtle.forward(1)
    for (let index = 0; index < 3; index++) {
        turtle.pen(TurtlePenMode.Up)
        turtle.turnRight()
        turtle.forward(1)
        turtle.pen(TurtlePenMode.Down)
        turtle.turnLeft()
        turtle.forward(1)
    }
    turtle.pen(TurtlePenMode.Up)
    turtle.turnRight()
    turtle.forward(1)
})
