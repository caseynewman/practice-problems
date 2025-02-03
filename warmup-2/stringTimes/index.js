// Given a string and a non-negative int n, return a larger string that is n copies of the original string.


function stringTimes(str, n) {
    let result = ''
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result
}