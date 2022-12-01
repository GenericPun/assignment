
function randomLights (array: number[][]) {
    for (let x = 0; x <= array.length - 1; x++) {
        for (let y = 0; y <= array[x].length - 1; y++) {
            array[x][y] = randint(0, 255)
        }
    }
}
function displayLights (array: number[][]) {
    for (let x = 0; x <= array.length - 1; x++) {
        for (let y = 0; y <= array[x].length - 1; y++) {
            led.plotBrightness(x, y, lights[x][y])
        }
    }
}




let size = 5
let lights = array_2d(size, size)
randomLights(lights)
displayLights(lights)

while (true) {
    if (input.buttonIsPressed(Button.A)) {
         verticalWrap(lights)
    }
    sleep(0.2)
    displayLights(lights)
}
