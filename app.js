//1
for (var i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//2
var number = 0;
do {
    var num = prompt('введите число')
    if (num > 0) {
        number -= num
    }else {
        alert(number)
        break
    }
}while (true)
