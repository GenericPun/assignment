function verticalWrap(array: number[][]) {
    for (let x = 0; x <= array.length - 1; x++) {
        const save_value = array[x][0]
        for (let y = 1; y < array[x].length; y++) {
            array[x][y - 1] = array[x][y]
        }
        array[x][array[x].length - 1] = save_value
    }
}