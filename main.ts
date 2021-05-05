input.onButtonPressed(Button.A, function () {
    basic.showNumber(a + b)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(a * b)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(a - b)
})
let a = 0
let b = 0
b = 2
a = 6
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showNumber(a / b)
    }
})
