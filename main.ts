function VERT () {
	
}
input.onButtonPressed(Button.A, function () {
    ROUGE()
    JAUNE()
    VERT()
})
function ROUGE () {
    for (let index = 0; index < 100; index++) {
        basic.pause(1000)
        range2 = strip.range(0, 1)
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.clear()
        basic.pause(1000)
        range2 = strip.range(1, 1)
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.clear()
        basic.pause(1000)
        range2 = strip.range(2, 1)
        range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.clear()
        basic.pause(1000)
        range2 = strip.range(3, 1)
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.clear()
        basic.pause(1000)
    }
}
function JAUNE () {
	
}
let range2: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(70)
basic.forever(function () {
	
})
