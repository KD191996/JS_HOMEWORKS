'use strict'

const year = prompt('Введіть рік вашого народження');
const city = prompt('Введіть місто в якому ви живите');
const sport = prompt('Введіть ваш улюблений вид спорту (футбол, гандбол, бокс)');

let age = null

 if (year === null) {
     alert('Шкода, що ви не захотіли ввести ваш рік народження.')
 } else {
     const currentYear = new Date(). getFullYear();
     age = currentYear - year;
 }

let country = null;

if (city === null) {
    alert('Шкода, що ви не захотіли ввести місто, в якому ви живете')
} else {
    switch (city.toLowerCase()){
        case 'київ':
            country = ('Ти живеш у столиці України.') ;
            break;
        case 'вашингтон':
            country = ('Ти живеш у столиці США.');
            break;
        case 'лондон':
            country = ('Ти живеш у столиці  Англії та Сполученого Королівства.');
            break;
        default:
            country = ('Ти живеш у місті' + ' ' + city + '.')
    }
}
 let champ = null;

if (sport === null) {
    alert('Шкода, що ви не захотіли ввести ваш улюблений вид спорту')
} else {
    switch (sport) {
        case 'футбол':
            champ = 'Круто! Хочеш стати, як Мессі?';
            break;
        case 'гандбол':
            champ = 'Круто! Хочеш стати, як Хансен?';
            break;
        case 'бокс':
            champ = 'Круто! Хочеш стати, як Тайсон Фьюри?';
            break
        default:
            champ = 'Вибери вид спорту з вищеперерахованих';
    }
}


alert('Ваш вік:' + ' ' + age + ' ' + country + ' ' + champ)

















