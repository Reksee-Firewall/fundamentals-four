const add = function(numOne, numTwo) {
	return (parseInt(numOne, 10) + parseInt(numTwo, 10));
};

const subtract = function(numOne, numTwo) {
	return (parseInt(numOne, 10) - parseInt(numTwo, 10));
};

const sum = function(sumArray) {
  let sum = 0;
  for (let i = 0; i < sumArray.length; i++) {
    sum += parseInt(sumArray[i], 10); 
  }
  return sum;
};

const multiply = function(multArray) {
  let mult = 1; 
  for (let i = 0; i < multArray.length; i++) {
    mult *= parseInt(multArray[i], 10); 
  }
  return mult;
};

const power = function(numOne, toPower) {
	return Math.pow(numOne, toPower); 
};

const factorial = function(number) {
  let fact = 1;
  for (let i = 0; i < number; i++) {
    fact *= (number - i);
  }
  return fact; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
