// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.


function nearHundred(n) {
    if ((n >= 90 && n <= 100) || (n >= 190 && n <= 200)) {
        return true
    } else if ((n <= 110 && n >= 100) || (n >= 210 && n <= 200)) {
        return true
    } else {
        return false
    }
}