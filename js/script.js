'use strict'


const firstNum = +prompt('Введіть перше число');
const secondNum = +prompt('Введіть друге число');

const sum = firstNum + secondNum;
const sub = firstNum - secondNum;
const mult =  firstNum * secondNum;
const div = firstNum / secondNum;
if (secondNum === 0) {
        console.log("Помилка: ділення на нуль");

}

let message = "Користувач ввів " + firstNum + " і " + secondNum + ":\n\n";
message += firstNum + " + " + secondNum + " = " + sum + "\n";
message += firstNum + " - " + secondNum + " = " + sub + "\n";
message += firstNum + " * " + secondNum + " = " + mult + "\n";
message += firstNum + " / " + secondNum + " = " + div;


alert(message);






