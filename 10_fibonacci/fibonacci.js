const fibonacci = function(numberPosition) {
    if (numberPosition < 0)   
        return "OOPS";
    let numOne = 1;
    let numTwo = 1;
    let temp = 0; 
    for(let i = 0; i < (numberPosition - 2); i++) {
        numOne = numOne + numTwo; 
        temp = numOne; 
        numOne = numTwo; 
        numTwo = temp; 
    }
    return numTwo;
};

// Do not edit below this line
module.exports = fibonacci;
