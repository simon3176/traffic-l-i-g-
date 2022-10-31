def VERT():
    pass

def on_button_pressed_a():
    ROUGE()
    JAUNE()
    VERT()
input.on_button_pressed(Button.A, on_button_pressed_a)

def ROUGE():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.RED))
    basic.pause(100)
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    basic.pause(100)
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.GREEN))
    basic.pause(100)
    range2 = strip.range(3, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    basic.pause(100)
def JAUNE():
    pass
range2: neopixel.Strip = None
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.set_brightness(70)

def on_forever():
    pass
basic.forever(on_forever)
