'use strict';

const http = require('http');
let indexCount = 0;
let aboutCount = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end(`
        <h1>Index page</h1>
        <p>Просмотров ${++indexCount}</p>
        <a href="/about">Ссылка на страницу /about</a>
        `);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end(`
        <h1>About page</h1>
        <p>Просмотров ${++aboutCount}</p>
        <a href="/">Ссылка на страницу /</a>
        `);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8'
        });

        res.end(`
        <h1>404 error page</h1>
        <a href="/about">Ссылка на страницу /about</a>
        <a href="/">Ссылка на страницу /</a>
        `);
    }
});

const port = 3000;

server.listen(port, () => {
    console.log('Сервер загружен на порт ' + port);
});