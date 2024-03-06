'use strict'

const number1 = Number (prompt('Введіть перше число'));
if (isNaN (number1)) {
    alert('Введіть вірне значення для першого числа');
}

const number2 = Number (prompt('Введіть друге число'));
if (isNaN(number2)) {
    alert('Введіть вірне значення для другого числа');
}

const number3 = Number (prompt('Введіть третє число'));
if (isNaN(Number(number3))) {
    alert('Введіть вірне значення для третього числа');
}

alert( "Середнє арифметичне: " + (number1 + number2 + number3) / 3)


console.log(typeof number1)
console.log(typeof number2)
console.log(typeof number3)
