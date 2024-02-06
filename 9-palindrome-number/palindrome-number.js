/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let word = x.toString(); 
    let flip = "";
    for(let i = 0; i <= word.length; i++) {
        flip = flip + word.charAt(word.length - i);
    }
    if (word == flip) {
        return true;
    } else {
        return false;
    }
};