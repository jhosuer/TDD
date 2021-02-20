function isIsomorphic(firstString, secondString) {
    if (firstString.length !== secondString.length) return false;

    let chars = {};
    for (let i = 0; i < firstString.length; i++) {
        let strA = firstString[i];
        let strB = secondString[i];
        if (chars[strA] === undefined) {
            chars[strA] = strB;
        }
        else if (chars[strA] !== strB) {
            return false;
        }
    }
    return true;
}
module.exports = isIsomorphic;