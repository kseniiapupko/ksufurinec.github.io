var arr = [];
for (var i = 0; i < 5; i++) {
    arr[i] = prompt('Введите имя');
}

console.log(arr);

var userName = prompt('Как вас зовут?');

console.log('Вас зовут ' + userName);

for (var i = 0; i < 5; i++) {
if (arr[i] == userName) {
	alert('Вы успешно вошли ' + userName)}
}

if (i>=5){
	alert('Ошибка')
}
