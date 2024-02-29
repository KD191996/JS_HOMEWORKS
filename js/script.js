'use strict'

const userFirstName = prompt('What is your name?');
const userLastName= prompt('What is your last name?');
const userSurname =prompt('What is your surname?');
const userFullName = userFirstName + ' ' + userLastName + ' ' + userSurname;
console.log(userFullName);


const num = 12345;
const array = [...num.toString()] .map(Number) .join(' ');
console.log(array);

