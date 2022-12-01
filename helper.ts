export function array_2d(x_max: number, y_max: number): number[][] {
    let array = []
    for (let i = 0; i <= x_max - 1; i++) {
        array[i] = []
        for (let j = 0; j <= y_max - 1; j++) {
            array[i][j] = null
        }
    }
    return array
}

export function sleep(seconds: number) {
    control.waitMicros(seconds * 1000000)
}