/**
 * https://www.cytron.io/p-grove-wifi-8266-iot-for-microbit-and-beyond
 */
/**
 * https://github.com/cytrontechnologies/pxt-esp8266
 */
// https://github.com/jegyed50/Growe-WiFi-pxt-esp8266_EJ
input.onButtonPressed(Button.A, function () {
    APEX_esp8266.init(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
    if (APEX_esp8266.isESP8266Initialized()) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        APEX_esp8266.connectWiFi("ARRIS-02D9", "01C2BBC549B74403")
        if (APEX_esp8266.isWifiConnected()) {
            basic.showLeds(`
                . # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            if (true) {
                basic.showLeds(`
                    . . # . .
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
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                `)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
})
