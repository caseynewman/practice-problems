// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.


function makes10(a, b) {
    if (10 === a || 10 === b) {
        return true
    } else if (a + b === 10) {
        return true
    } else {
        return false
    }
}