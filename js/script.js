'use strict'

let userFirstName = prompt('What is your name?');
let userLastName= prompt('What is your last name?');
let userSurname =prompt('What is your surname?');
let userFullName = userFirstName + ' ' + userLastName + ' ' + userSurname;
console.log(userFullName);


let num = 12345;
let array = [...num.toString()] .map(Number) .join(' ');
console.log(array);

