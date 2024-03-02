'use strict'

// Задача 1

let user = { };
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);

// Задача 2
//
// Чи можна змінити об'єкт, оголошений за допомогою const?
// так, це буде працювати. Оскільки ми будемо змінювати властивість об'єкта,
// а перевизначати саму змінну

// Задача 3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = salaries.John + salaries.Ann + salaries.Pete
console.log(sum)