// Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.


function in3050(a, b) {
    let aRange1 = 30 <= a && a <= 40
    let aRange2 = 40 <= a && a <= 50
    let bRange1 = 30 <= b && b <= 40
    let bRange2 = 40 <= b && b <= 50

    return aRange1 && bRange1 || aRange2 && bRange2
}