const counter = require('./counter');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let tmpObj = counter.readCounter();
    res.send(`
    <h1>Корневая страница</h1>
    <p>Просмотров: ${++tmpObj.head}</p>
    <a href="/about">Ссылка на страницу /about</a>
    `);
    counter.writeCounter(tmpObj);
});

app.get('/about', (req, res) => {
    let tmpObj = counter.readCounter();
    res.send(`
    <h1>Страница about</h1>
    <p>Просмотров: ${++tmpObj.about}</p>
    <a href="/">Ссылка на страницу /</a>
    `);
    counter.writeCounter(tmpObj);
});

const port = 3000;

app.listen(port, () => {
    console.log(`server started in port ${port}`);
});