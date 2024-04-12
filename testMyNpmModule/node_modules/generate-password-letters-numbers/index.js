'use strict';

const allSymbols = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

function getPassword(length) {
    let tmpPassword = '';
    for (let i = 0; i < length; i++) {
        const tmpNum = parseInt(Math.random() * allSymbols.length);
        tmpPassword += allSymbols[tmpNum];
    }
    return tmpPassword;
}

module.exports = { getPassword };