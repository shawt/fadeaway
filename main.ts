let i = 0
basic.forever(function () {
    while (i < 1023) {
        pins.analogWritePin(AnalogPin.P0, i)
        i += 1
        basic.pause(10)
    }
    i = 0
})
