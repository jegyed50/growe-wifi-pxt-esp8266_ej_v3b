input.onButtonPressed(Button.A, function () {
    APEX_esp8266.init(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    APEX_esp8266.connectWiFi("ARRIS-02D9", "01C2BBC549B74403")
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    APEX_esp8266.connectAPEXLocal("", "")
    if (APEX_esp8266.isAPEX_LOCAL_Connected()) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        APEX_esp8266.uploadAPEXLocal(
        "",
        "",
        "",
        "",
        0
        )
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    }
})
// https://www.cytron.io/p-grove-wifi-8266-iot-for-microbit-and-beyond
input.onButtonPressed(Button.B, function () {
    APEX_esp8266.uploadThingspeak(
    "ICPZTSAEIMBWJDTK",
    77
    )
})
radio.setGroup(1)
// https://github.com/cytrontechnologies/pxt-esp8266
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
led.setBrightness(15)
radio.sendString("start")
