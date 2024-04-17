const path = require('path');
const fs = require('fs');

const pathToFile = path.join(__dirname, 'counter.json');

function readCounter() {
    try {
        return JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
    } catch (error) {
        console.log(error);
    }
}

function writeCounter(obj) {
    try {
        fs.writeFileSync(pathToFile, JSON.stringify(obj), 'utf-8');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {writeCounter, readCounter}

