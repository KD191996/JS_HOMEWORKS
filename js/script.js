'use strict'

const num = +prompt('Введіть число');

if (num < 1) {
    console.log("NaN");
} else if (num === 1) {
    console.log ('Мінімальний дільник числа' + ' ' + num + '-' + num)
}else {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0){
            console.log('Мінімальний дільник числа' + ' ' + num + '-' + i)
            break
        }
    }
}

