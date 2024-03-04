'use strict'

const firstNum = +prompt('Введіть перше число');
const secondNum = +prompt('Введіть друге число');

function sum () {

    const result = firstNum + secondNum;
    console.log('Результат:' + firstNum + '+' + secondNum + '=' + result);
}
sum(firstNum, secondNum);

function sub () {

    const result = firstNum - secondNum;
    console.log('Результат:' + firstNum + '-' + secondNum + '=' + result);
}
sub(firstNum, secondNum);

function div () {
    if (secondNum === 0) {
        console.log("Помилка: ділення на нуль");
    return
    }
    const result = firstNum / secondNum;
    console.log('Результат:' + firstNum + '/' + secondNum + '=' + result);

}
div(firstNum, secondNum);

function mult () {

    const result = firstNum * secondNum;
    console.log('Результат:' + firstNum + '*' + secondNum + '=' + result);
}
mult(firstNum, secondNum);




