/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
    const lines = [
        "qwertyuiop".split(''),
        "asdfghjkl".split(''),
        "zxcvbnm".split('')
    ];
    const check = [];
    const a = 'a'.charCodeAt();
    for(let i = 0; i < 26; i++) {
        const ch = String.fromCharCode(a + i);
        for(let j = 0; j < 3; j++) {
            if (lines[j].indexOf(ch) >= 0) {
                check.push(j);
                break;
            }
        }
    }
    const ret = [];
    for(const word of words) {
        const wordIndex = word.split('').map(ch => {
            ch = ch.toLowerCase().charCodeAt();
            return check[ch - a]
        });
        const wordSet = new Set(wordIndex);
        if (wordSet.size === 1) {
            ret.push(word);
        }
    }
    return ret;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]));
console.log(findWords(["omk"]));
console.log(findWords(["adsdf","sfd"]));