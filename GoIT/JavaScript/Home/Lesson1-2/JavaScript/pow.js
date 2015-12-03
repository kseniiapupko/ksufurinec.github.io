var x = prompt ('Укажите число');
console.log ("x=", x)
var n = prompt ('Укажите степень');
console.log ("n=", n)

// Math.pow(x,n);
// console.log ('Результат возведения в степень =', Math.pow(x,n) )

var result = 1;

for (var i=0; i<n; i++){
	result=result * x;
}

console.log(result);
