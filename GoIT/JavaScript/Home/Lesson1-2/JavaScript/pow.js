var x = +prompt ('Укажите число');
console.log ("x=", x)
var n = +prompt ('Укажите степень');
console.log ("n=", n)

// Math.pow(x,n);
// console.log ('Результат возведения в степень =', Math.pow(x,n) )

function pow(a,n) {
	
var result = 1;

for (var i=0; i<n; i++){
	result=result * a;
}

	return result;
}
	var powResult = pow(x,n);
	
	console.log(powResult);
