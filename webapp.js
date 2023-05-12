const http = require('http');
const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plan');
    res.end('hello world');
});

server.listen(port, hostname, () => {
    console.log('Server running at  http://${hostname}"${port}/');
});