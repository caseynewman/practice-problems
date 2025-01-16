// Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.


function startOz(str) {
    if (str.length >= 1) {
        if (str.indexOf('oz') === 0) {
            return str.substring(0, 2)
        } else if (str.charAt(0) === 'o' && str.charAt(1) !== 'z') {
            return 'o'
        } else if (str.charAt(0) !== 'o' && str.charAt(1) === 'z') {
            return 'z'
        } else {
            return ''
        }
    } else {
        return ''
    }
}

