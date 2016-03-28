let pow =(x, n) => {
  let result = x;

  for (var i = 1; i < n; i++){
    result *= x;
  }

  return result;
}


let calResult = pow(2, 4);

module.exports = pow;

console.log('Result: ', calResult);
