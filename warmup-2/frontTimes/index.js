// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front.


function frontTimes(str, n) {
    let front = str.slice(0, 3);
    let result = "";

    for (let i = 0; i < n; i++) {
        result += front;
    }

    return result;
}