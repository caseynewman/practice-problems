// Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.


function delDel(str) {
    if (str.indexOf('del') === 1) {
        return str.replace('del', '');
    } else {
        return str
    }
}