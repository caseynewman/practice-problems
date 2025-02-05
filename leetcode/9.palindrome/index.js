// Given an integer x, return true if x is a palindrome, and false otherwise.


let isPalindrome = function (x) {
    let numStr = x.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}