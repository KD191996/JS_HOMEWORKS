'use strict'

const operation = prompt('Яку математичну операцію ви хочете здійснити (+, -, *, /)?')
const firstNumber = +prompt('Введіть перше число')
const secondNumber = +prompt('Введіть друге число')


if (operation) {
    let result = null;

    if (operation === '+'){
        result = (firstNumber + secondNumber)
    }

    if (operation === '-') {
        result = (firstNumber - secondNumber)
    }

    if (operation === '*') {
        result = (firstNumber * secondNumber)
    }

    if (operation === '/'){
        result = (firstNumber / secondNumber)
    }
    else{
        result = ('Дані введені не вірно. Перевірте та спробуйте ще раз');
    }
    alert(result)
}

