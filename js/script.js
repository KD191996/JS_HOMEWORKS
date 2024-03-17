'use strict'

const arr = [1, 2, 3, 4, -1, -2, -3, -4];

function foo (arr) {
    const positivArr = [];

    if (arr.length === 0) {
        return 'Масив порожній'
    }

    for (let a = 0; a < arr.length; a++){
        if (arr[a] > 0) {
            positivArr.push(arr[a]);
        }
    }

    if (positivArr.length > 0) {
        return positivArr;
    } else {
        return null;
    }
}

const result = foo (arr)
alert(result)