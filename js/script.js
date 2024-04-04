'use strict'

let fruits = ['яблоко', 'апельсин', 'банан','апельсин'];
let numbers = [1, 2, 3, 4, 5];
// indexOf

const indexOf = function (arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        if (arr [i] === callback) {
            return i
        }
    }
    return -1

}

console.log(indexOf (fruits, 'яблоко', ))

// lastIndexOf

const lastIndexOf = function (arr, callback) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr [i] === callback) {
            return i
        }
    }
    return -1
}
console.log(lastIndexOf(fruits,'апельсин'));

// find
let foundFruit = fruits.find(function(fruit) {
    return fruit.length > 5;
});


const find = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i]
        }
    }
    return undefined;
}

console.log(find (fruits, function(fruit) {
    return fruit.length > 5;
}))

// findIndex

const findIndex = function (arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i])) {
            return i
        }
    }
    return -1
}

let foundIndex = findIndex(numbers, function(element) {
    return element > 4
});
console.log(foundIndex);

// includes

const includes = function (arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (callback === arr[i]){
            return true
        }
    }
    return false
}

console.log(includes (fruits,'яблоко'))

// every
const every =  function (arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (!callback(arr[i])) {
            return false
        }
    }
    return true
}

console.log(every(numbers, function(element) {
    return element > 0;
}))

// some
const some =  function (arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i])) {
            return true
        }
    }
    return false
}
// reduce
const reduce = function (arr, callback, accumulator) {
    let result = accumulator;
    for(let i = 0; i < arr.length; i++) {
        result = callback(accumulator, arr[i], i, arr)
    }
    return result;
}

console.log(
    reduce(users, function (accum, item) {
        accum[item.id + '_' + item.username] = item.address;
        return accum;
    }, {})
)