'use strict'

let firstNum = +prompt('Введіть перше число');
let secondNum = +prompt('Введіть друге число');

function sum () {

    let result = firstNum + secondNum;
    console.log('Результат:' + firstNum + '+' + secondNum + '=' + result);
}
sum(firstNum, secondNum);

function sub () {

    let result = firstNum - secondNum;
    console.log('Результат:' + firstNum + '-' + secondNum + '=' + result);
}
sub(firstNum, secondNum);

function div () {
    if (secondNum === 0) {
        console.log("Помилка: ділення на нуль");
    return
    }
    let result = firstNum / secondNum;
    console.log('Результат:' + firstNum + '/' + secondNum + '=' + result);

}
div(firstNum, secondNum);

function mult () {

    let result = firstNum * secondNum;
    console.log('Результат:' + firstNum + '*' + secondNum + '=' + result);
}
mult(firstNum, secondNum);




