// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)


function or35(n) {
    if ((n % 3 === 0) || (n % 5 === 0)) {
        return true
    } else {
        return false
    }
}