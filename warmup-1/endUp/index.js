// Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.


function endUp(str) {
    if (str.length < 3) {
        return str.toUpperCase()
    } else {
        let lastThree = str.slice(-3).toUpperCase();
        return str.slice(0, -3) + lastThree
    }
}