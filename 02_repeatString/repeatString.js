const repeatString = function(simpleText, numberOfRepeats) {
    let i; 
    let concatString = ""; 
    if (numberOfRepeats >= 0) {
        for (let i = 0; i < numberOfRepeats; i++) {
            concatString = concatString.concat(simpleText);
        }
        return concatString;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
