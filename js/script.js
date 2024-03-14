'use strict'


// 1.
// let a = '';
//
// for (let i = 10; i <= 20; i++) {
//
//     a += i;
//
//     if (i < 20) {
//         a += ', ';
//     }
// }
//
// alert(a)

// 2.
// for (let b = 10; b <= 20; b++ ) {
//     const square = b * 2;
//     console.log('квадрат числа' + ' ' + b + ' ' + 'дорівнює' + ' ' + square)
// }

// 3.
// for (let a = 0;  a <= 10; a++) {
//     const mult = 7 * a;
//     console.log(mult)
// }

// 4.
// let sum = 0;

// for (let i = 1; i <= 15; i++) {
//     sum += i;
// }

// console.log('Сума всіх цілих чисел від 1 до 15:', sum);

// 5.
// let mult = 1;
//
// for (let a = 15; a <= 35; a++) {
//     mult *= a;
// }
// console.log('Добуток всіх цілих чисел від 15 до 35:', mult)

// 6.
// let sum = 0;
//
// for (let a = 1; a <= 500; a++) {
//     sum += a ;
// }
// let average = sum / 500
//
// console.log('середнє арифметичне всіх цілих чисел від 1 до 500:' + ' ' + average)

// 7.
// let sum = 0;
//
// for (let a = 30; a <= 80; a++){
//
//     if (a % 2 === 0) {
//         sum += a;
//     }
// }
// console.log('суму лише парних чисел в діапазоні від 30 до 80:' + sum)

// 8.
// for (let a = 100; a <= 200; a++) {
//     if (a % 3 === 0) {
//         console.log(a);
//     }
// }

// 9.
// let number = 18;
// let b = null;
//
// for (let a = 1; a <= number; a++){
//     b = a;
//     if (number % a === 0) {
//         console.log (b)
//     }
// }

// 10.
// let number = 18;
// let a = null;
//
// for (let b = 1; b <= number; b++){
//     if (number % b === 0 && b % 2 === 0) {
//         a = b
//         console.log(a)
//     }
// }

// 11.
// let number = 18;
// let sum = 0;
//
//
// for (let b = 1; b <= number; b++){
//     if (number % b === 0 && b % 2 === 0) {
//         sum += b;
//     }
// }
// console.log('сумма парних дільников:' + sum)

// 12.

for (let a = 1; a <= 10; a++) {

    for (let b = 1; b <= 10; b++){
       let sum = b * a;

        console.log( a + '*' + b + '=' + sum + '\n')
    }

}



