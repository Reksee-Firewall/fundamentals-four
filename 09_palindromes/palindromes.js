const palindromes = function (stringEntry) {
    const stringLength = stringEntry.length;
    // First, we've to turn upper-case letters into lower-case letters.
    const lowerString = stringEntry.toLowerCase();
    // Then, we've to remove puntuaction and other special chars by using the method charCodeAt().
    let basicString = ""; 
    // Limitamos a busca pelos caracteres que procuramos somente.
    for (let i = 0; i < stringLength; i++) {
            // Letters
        if (((lowerString.charCodeAt(i) >= 97) &&
            (lowerString.charCodeAt(i) <= 122)) ||
            // Numbers
            ((lowerString.charCodeAt(i) >= 48) &&
            (lowerString.charCodeAt(i) <= 57))) {
            basicString += lowerString.charAt(i);
        }
    }
    const reversedString = (basicString).split("").reverse(); 
    let miss = 0;
    for (i = 0; i < stringLength; i++) {
        if (basicString[i] !== reversedString[i]) {
            miss += 1;
        }
    }
    if (miss > 0) {
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
