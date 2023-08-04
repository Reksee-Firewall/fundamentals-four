const reverseString = function(toBeReversed) {
    let charArray = toBeReversed.split('');
    let reversedArray = charArray.reverse();
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
