const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    console.log(req.url)

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Welcome to my website</h1>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>about Hello World coding in nodejs by ripu</h1>');
    }
    else if (req.url == '/hello') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());  
    }
    else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
})

server.listen(port, () => {
    (`Server is listening on port ${port}`)
});