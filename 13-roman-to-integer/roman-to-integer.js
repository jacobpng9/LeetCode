/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    final = 0;
    const roman = new Map([
        ["I", 1], 
        ["V", 5], 
        ["X", 10], 
        ["L", 50], 
        ["C", 100], 
        ["D", 500], 
        ["M", 1000] 
    ]);
    if (s.length == 1){
        return roman.get(s);
    }
    for(let i = s.length - 1; i >= 0; i--) {
        if (roman.get(s.charAt(i)) <= roman.get(s.charAt(i - 1))) {
            final+=roman.get(s[i]);
            console.log(s[i]);
        } else if (roman.get(s.charAt(i)) > roman.get(s.charAt(i - 1))) {
            final+=roman.get(s[i]) - roman.get(s[i-1]);
            i-=1;
        }
    }
    if(roman.get(s[1]) <= roman.get(s[0])) {
        final+=roman.get(s[0]);
    }
    return final;
};