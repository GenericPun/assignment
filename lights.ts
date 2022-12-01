export function randomLights(array: number[][]) {
    for (let x = 0; x <= array.length - 1; x++) {
        for (let y = 0; y <= array[x].length - 1; y++) {
            array[x][y] = randint(0, 255)
        }
    }
}

export function displayLights(array: number[][]) {
    for (let x = 0; x <= array.length - 1; x++) {
        for (let y = 0; y <= array[x].length - 1; y++) {
            led.plotBrightness(x, y, lights[x][y])
        }
    }
}