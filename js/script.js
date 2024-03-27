'use strict'

// 1.
let arr = ['a', 'b', 'c', 'd'];
let result = arr.slice(0,2).join('+') + ',' + arr.slice(2).join('+')

console.log(result)

// 2.
arr = [2,5,3,9]

const firstProduct = arr[0] * arr[1];
const secondProduct = arr[2] * arr[3];

result = firstProduct + secondProduct
console.log(result)

// 3.
arr =  [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
const subArr = arr.find(item => item.includes(4))
result = subArr.find(num => num === 4)

console.log(result)

// 4.
const obj =  {
    js:['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'}

result = obj.js.find (item => item === 'jQuery')
console.log(result)

// 5.

const array = [];

for (let i = 1; i <= 5; i++) {
    array.push('x'.repeat(i));
}

console.log(array)

// 6.

const ar = [];

for (let i = 1; i <= 5; i++) {
    ar.push(i.toString().repeat(i));
}

console.log(ar);

// 7.
function arrayFill  (value, length) {
    const x = [];
    for (let i = 0; i < length; i++){
        x.push(value)
    }
    return x
}

console.log(arrayFill('+',8))

// 8.
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
let elementsToAdd = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    elementsToAdd++;

    if (sum > 10) {
        break;
    }
}

console.log("Кількість елементів для додавання:", elementsToAdd);

// 9.
arr = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
}

console.log(reversedArray);