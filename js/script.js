'use strict'

const temp = +prompt('Будь-ласка, введіть значення температури');
const type = prompt('Буді-ласка, введіть одиниці виміру температури, де F - Фаренгейт та С - Цельсій')

if (!isNaN(temp)) {
    let result = null;

    if (type.toUpperCase() === 'F') {
        result = ('Температура по Цельсію складає') + (' ') + ((temp - 32) * 5/9);
    } else if (type.toUpperCase() === 'C'){
        result = ('Температура по Фаренгейту складає') + (' ') + ((temp * 9/5) + 32);
    }

    alert(result);
} else {
    alert('Невірні дані');
}



