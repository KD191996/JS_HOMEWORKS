'use strict'

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let key = '';

    for (let a = 0; a <= length; a++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        key += characters[randomIndex]
    }

    return key;
}

const key = generateKey(16, characters)


alert(key)