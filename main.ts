let Rods = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    Rods = randint(0, 5)
    if (Rods == 1) {
        for (let index = 0; index <= 4; index++) {
            led.plot(index, 0)
            led.plot(index, 2)
            led.plot(index, 3)
            led.plot(index, 4)
            basic.pause(1000)
            led.unplot(index, 0)
            led.unplot(index, 2)
            led.unplot(index, 3)
            led.unplot(index, 4)
        }
    } else if (Rods == 2) {
        for (let index = 0; index <= 4; index++) {
            led.plot(index, 0)
            led.plot(index, 1)
            led.plot(index, 3)
            led.plot(index, 4)
            basic.pause(1000)
            led.unplot(index, 0)
            led.unplot(index, 1)
            led.unplot(index, 3)
            led.unplot(index, 4)
        }
    } else if (Rods == 3) {
        for (let index = 0; index <= 4; index++) {
            led.plot(index, 1)
            led.plot(index, 2)
            led.plot(index, 3)
            led.plot(index, 4)
            basic.pause(1000)
            led.unplot(index, 1)
            led.unplot(index, 2)
            led.unplot(index, 3)
            led.unplot(index, 4)
        }
    } else if (Rods == 4) {
        for (let index = 0; index <= 4; index++) {
            led.plot(index, 0)
            led.plot(index, 1)
            led.plot(index, 2)
            led.plot(index, 4)
            basic.pause(1000)
            led.unplot(index, 0)
            led.unplot(index, 1)
            led.unplot(index, 2)
            led.unplot(index, 4)
        }
    } else if (Rods == 5) {
        for (let index = 0; index <= 4; index++) {
            led.plot(index, 0)
            led.plot(index, 1)
            led.plot(index, 2)
            led.plot(index, 3)
            basic.pause(1000)
            led.unplot(index, 0)
            led.unplot(index, 1)
            led.unplot(index, 2)
            led.unplot(index, 3)
        }
    } else {
    	
    }
})
