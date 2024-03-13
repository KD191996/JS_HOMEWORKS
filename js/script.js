'use strict'

const age = +prompt('Введіть ваш вік');

if (!isNaN(age)) {
    if (age % 10 === 1 && age % 100 !== 11){
        alert(age + ' ' + 'рік')
    } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
        alert(age + ' ' + 'роки')
    } else {
        alert(age + ' ' + 'років')
    }
} else {
    alert('Введіть число')
}


