'use strict'

// 1.
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// 2.
const one_dollar = 27;

for (let a = 10; a <= 100; a += 10) {
    const uah = a * one_dollar
    console.log( a + ' ' + 'долларів' + ' ' + '=' + uah + ' ' + 'гривень')
}

// 3.

const N= +prompt('Введіть ціле число ');

for (let M = 1;  Math.pow(M, 2) <= N && M <= 100; M++) {
    console.log("Цілі числа від 1 до 100, квадрат яких не перевищує " + N + ":" + M)
}

// 4.
const integer= +prompt('Введіть ціле число ');
let result = '';

if (integer <= 1) {
    result = 'Помилка'
} else {
    for (let s = 2; s <= Math.sqrt(integer); s++) {
        if (integer % s === 0) {
            result = integer + ' ' + 'не є простим числом'
            break
        }
        result = integer + ' ' + 'є простим числом'
    }
}


alert(result)