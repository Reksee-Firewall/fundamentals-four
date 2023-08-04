const removeFromArray = function(initArray, ...Args) {
    let arrayLength = initArray.length; 
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arrayLength; j++) {
            if (arguments[i] === initArray[j]) {
                initArray.splice(j, 1);
            }
        }
    }
    return (initArray); 
};

// Do not edit below this line
module.exports = removeFromArray;
