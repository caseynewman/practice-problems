// Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.


function close10(a, b) {
    let diffA = Math.abs(a - 10);
    let diffB = Math.abs(b - 10);

    if (diffA === diffB) {
        return 0
    } else if (diffA > diffB) {
        return b
    } else {
        return a
    }
}