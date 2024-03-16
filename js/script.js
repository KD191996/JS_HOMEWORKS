'use strict'

const num = +prompt('Введіть число');
const degree = +prompt('Введіть ступінь до якого необхідно піднести число');

function foo (num, degree = 1) {
    if (isNaN(num) && isNaN(degree)){
        return 'помилка. Обидва аргументи мають бути числами.'
    }

    return 'Число' + ' ' + num + ' ' + 'в' + ' ' + degree + ' ' + 'ступені' + '='+ Math.pow (num, degree)
}

const result = foo (num, degree);
alert(result)