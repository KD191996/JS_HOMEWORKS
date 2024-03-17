'use strict'

const string = prompt('Введіть рядок');
const lenght = +prompt(' Введіть число, яке буде визначати кількість символів');
const symbol = prompt('Введіть символ для доповнення рядка')
const right = prompt('Символ додати справа?(так/ні)') === 'так'


function padString (string, lenght, symbol, right = true) {
     if (string === undefined) {
         return 'Помилка. Відсутнє значення в рядку'
     }

     if (lenght === undefined) {
         return 'Помилка. Відсутнє число, яке визначає довжину рядка'
     }

    if (string.length >= lenght) {
        return string.substring(0 , lenght);
    }

    if (symbol.length !== 1) {
        return 'Помилка. Символ повинен бути довжиною в 1 символ.';
    }

    const differLenght = lenght - string.length;
    const newString = symbol.repeat(differLenght);

    if (right) {
        return string + newString;
    } else {
        return newString + string;
    }
}

const result = padString(string, lenght, symbol, right)

alert(result)



