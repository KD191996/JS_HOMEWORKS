'use strict'

const year = prompt('Введіть рік вашого народження');
 if (year === null) {
     alert('Шкода, що ви не захотіли ввести ваш рік народження.')
 } else {
     const currentYear = new Date(). getFullYear();
     const age = currentYear - year;
     const result= ('Ваш вік:' + ' ' + age + '/n')
 }

const city = prompt('Введіть місто в якому ви живите');
 let result = null
if (city === null) {
    alert('Шкода, що ви не захотіли ввести місто, в якому ви живете')
} else {
    switch (city.toLowerCase()){
        case 'київ':
            result = ('Ти живеш у столиці України') ;
            break;
        case 'вашингтон':
            result = ('Ти живеш у столиці США');
            break;
        case 'лондон':
            result = ('Ти живеш у столиці  Англії та Сполученого Королівства');
            break;
        default:
            result = ('Ти живеш у місті' + ' ' + city)
    }
}


alert(result)
//
// const sport = prompt('Введіть ваш улюблений вид спорту');
// if (sport === null) {
//     alert('Шкода, що ви не захотіли ввести ваш улюблений вид спорту')
// }














