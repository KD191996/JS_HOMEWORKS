'use strict'

const string = prompt('Введіть рядок');
const length = +prompt(' Введіть число, яке буде визначати кількість символів');
const symbol = prompt('Введіть символ для доповнення рядка')
const right = prompt('Символ додати справа?(так/ні)') === 'так'


const padString = function (string, length, symbol, right = true) {
     if (typeof string !== 'string') {
         return 'Помилка. Значення в рядку має відповідати типу данних string'
     }

     if (typeof length !== 'number'|| isNaN(length))  {
         return 'Помилка. Значення в рядку має відповідати типу данних number'
     }

    if (string.length >= length) {
        return string.substring(0 , length);
    }

    if (symbol.length !== 1) {
        return 'Помилка. Символ повинен бути довжиною в 1 символ.';
    }

    const differLength = length - string.length;
    const newString = symbol.repeat(differLength);

    if (right) {
        return string + newString;
    } else {
        return newString + string;
    }
}



alert(padString(string, length, symbol, right))



