'use strict';

const generate = require('generate-password-letters-numbers');

const password = generate.getPassword(20);

console.log(password);