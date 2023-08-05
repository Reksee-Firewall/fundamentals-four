const sumAll = function(numOne, numTwo) {
    let sumNumbers = 0; 
    let bigNum, smallNum; 

    if ((numOne < 0) || (numTwo < 0) || 
        (typeof numOne !== 'number') || 
        (typeof numTwo !== 'number')) {
        return 'ERROR'; 
    }
    if (numOne > numTwo) {
        bigNum = numOne; 
        smallNum = numTwo;
    } else {
        bigNum = numTwo;
        smallNum = numOne;
    }
    for (let i = 0; i < (bigNum - smallNum + 1); i++) {
        sumNumbers += smallNum + i;
    }
    return sumNumbers; 
};

// Do not edit below this line
module.exports = sumAll;