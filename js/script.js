'use strict'

const array = [1, 2, 3, 4, 5];

let summ = 0

for (let a = 0; a < array.length; a++) {
    summ += array[a]
}

console.log("Сума елементів масиву:", summ);

// Даний масив із числами. За допомогою циклу знайдіть суму квадратів елементів цього масиву.

const arr = [1, 2, 3, 4, 5];

let sum = 0

for (let a = 0; a < arr.length; a++) {

    sum += Math.pow(arr[a], 2)
}

console.log("Сума елементів масиву:", sum);


