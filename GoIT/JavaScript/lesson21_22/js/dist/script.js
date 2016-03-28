'use strict';

var pow = function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
};

var calResult = pow(2, 4);
console.log('Result: ', calResult);

var name = {
   sayName : function(name){
     return "Your name is " + name;
   }
};


  module.exports = pow;
