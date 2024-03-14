'use strict'


// 1.
let a = '';

for (let i = 10; i <= 20; i++) {

    a += i;

    if (i < 20) {
        a += ', ';
    }
}

alert(a)

// 2.
for (let b = 10; b <= 20; b++ ) {
    const square = b * 2;
    console.log('квадрат числа' + ' ' + b + ' ' + 'дорівнює' + ' ' + square)
}

// 3.
for (let c = 0;  c <= 10; c++) {
    const mult = 7 * c;
    console.log(mult)
}

// 4.
let sum = 0;

for (let f = 1; f <= 15; f++) {
    sum += f;
}

console.log('Сума всіх цілих чисел від 1 до 15:', sum);

// 5.
let multi = 1;

for (let h = 15; h <= 35; h++) {
    multi *= h;
}
console.log('Добуток всіх цілих чисел від 15 до 35:', multi)


// 6.
let summ = 0;

for (let t = 1; t <= 500; t++) {
    summ += t ;
}
let average = summ / 500

console.log('середнє арифметичне всіх цілих чисел від 1 до 500:' + ' ' + average)

// 7.
let amount = 0;

for (let q = 30; q <= 80; q++){

    if (q % 2 === 0) {
        amount += q;
    }
}
console.log('суму лише парних чисел в діапазоні від 30 до 80:' + sum)

// 8.
for (let r = 100; r <= 200; r++) {
    if (r % 3 === 0) {
        console.log(r);
    }
}

// 9.
let number = 18;
let n = null;

for (let m = 1; m <= number; m++){
    n = m;
    if (number % m === 0) {
        console.log (n)
    }
}

// 10.
let numb = 18;
let w = null;

for (let s = 1; s <= number; s++){
    if (numb % s === 0 && s % 2 === 0) {
        w = s
        console.log(w)
    }
}

// 11.
let num = 18;
let sym = 0;


for (let l = 1; l <= num; l++){
    if (num % l === 0 && l % 2 === 0) {
        sym += l;
    }
}
console.log('сумма парних дільников:' + sym)

// 12.

for (let y = 1; y <= 10; y++) {

    for (let z = 1; z <= 10; z++){
       let amoun = z * y;

        console.log( y + '*' + z + '=' + amoun + '\n')
    }

}



