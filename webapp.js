const http = require('http');
const hostname = ('localhost');
const dt = require("./module");
const port = 3000;

const fileojb = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    switch (req.url) {
        case "/home":
            res.writeHead(200);
            res.end(`<h1>This is the home page</h1>`);
            break;
        case "/about":
            res.writeHead(200);
            res.end(`This is the about page`);
            break;
        case "/compute":
            res.writeHead(200);
            res.end(`This is the about  page ${dt.calc(10, 100, "*")}`);
            break;
        case "/Listener":
            res.writeHead('Content-Type', 'text/html')

        default:
            // res.writeHead();
            res.end('<h2>Invalid method</h2>');
            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`server dang hoat dong o http://${hostname}:${port}`);
});