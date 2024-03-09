'use strict'

// 1.

let x = 10;
let y = 7;
let result = x > y ? 'x більше за у' : 'х не більше за у';

console.log (result)

// 3.

const num = prompt('Введіть ціле число');
const sing = num > 0 ? 'позитивне' : 'негативне';
const a = num > 0 ? num.length : num.length - 1;

if (a === 1) {
    console.log('Число' + ' ' + num + ' ' + 'однозначне' + ' ' + sing );
}else if (a === 2) {
    console.log('Число' + ' ' + num + ' ' + 'двозначне' + ' ' + sing);
} else  {
    console.log('Число' + ' ' + num + ' ' + 'тризначне або більше' + ' ' + sing);
}

console.log(num.length, sing, typeof a);

// 4.

const num1 = +prompt('Введіть перше число');
const num2 = +prompt('Введіть друге число');
const num3 = +prompt('Введіть третє число');

if (num1 >= num2 && num1 >= num3) {
    console.log("Найбільше число: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Найбільше число: " + num2);
} else {
    console.log("Найбільше число: " + num3);
}

// 5.

const side1 = +prompt('Введіть першу сторону трикутника')
const side2 = +prompt('Введіть другу сторону трикутника')
const side3 = +prompt('Введіть третю сторону трикутника')

if ( side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log('Трикутник може існувати при таких довжинах');
} else {
    console.log('Трикутник не може існувати при таких довжинах');
}