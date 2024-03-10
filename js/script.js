'use strict'

const age = prompt('Введіть ваш вік');

if (!isNaN(age)) {
    if (age === '1'){
        alert(age + ' ' + 'рік')
    } else if (age > 1 && age < 5) {
        alert(age + ' ' + 'роки')
    } else {
        alert(age + ' ' + 'років')
    }
} else {
    alert('Введіть число')
}


