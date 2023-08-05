const convertToCelsius = function(fahrenheitTemp) {
  // Tc = 5/9(Tf -32)
  let celsiusTemp = ((5/9) * (fahrenheitTemp - 32)).toFixed(1);
  return parseFloat(celsiusTemp, 10);
};

const convertToFahrenheit = function(celsiusTemp) {
  // Tf = 9/5(Tc) + 32
  let fahrenheitTemp = ((9/5) * (celsiusTemp) + 32).toFixed(1);
  return parseFloat(fahrenheitTemp, 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
