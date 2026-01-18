const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end("Hello Node Js I am startinig from server with Tarekul Islam....");
});

server.listen(3000, () => {
    console.log("The server started at http://localhost:3000");
});
