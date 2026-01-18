const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/users'){
        res.end("User List showing");
    }else if(req.url === '/products') {
        res.end("Product List showing");
    }else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000);

