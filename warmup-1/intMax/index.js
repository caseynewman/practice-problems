// Given three int values, a b c, return the largest.


function intMax(a, b, c) {
    let largest = a;
    
    if (b > largest) {
        largest = b;
    }

    if (c > largest) {
        largest = c;
    }

    return largest
}