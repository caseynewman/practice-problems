// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.


function parrotTrouble(talking, hour) {
    if (talking && (hour > 0) && (hour < 7)) {
        return true
    } else if (talking && ((hour > 20) && (hour < 24))) {
        return true
    } else {
        return false
    }
}