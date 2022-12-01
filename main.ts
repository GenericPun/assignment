import { array_2d, sleep } from './helper'
import { verticalWrap } from './wrap'
import { displayLights, randomLights} from './lights'




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
