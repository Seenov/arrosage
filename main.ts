let secondes = 0
let minute = 0
let heure = 0
loops.everyInterval(1000, function () {
    if (secondes < 60) {
        secondes = secondes + 1
    } else {
        secondes = 0
        if (minute < 60) {
            minute = minute + 1
        } else {
            minute = 0
            if (heure < 24) {
                heure = heure + 1
            } else {
                heure = 0
            }
        }
    }
})
basic.forever(function () {
	
})
