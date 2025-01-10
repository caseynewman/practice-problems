// Given a string, return a new string where the first and last chars have been exchanged.


function frontBack(str) {
    if (str.length < 2) {
        return str
    } else if (str.length > 1) {
        return str.charAt(str.length - 1) + str.substring(1, (str.length - 1)) + str.charAt(0)
    } else {
        return false
    }
}