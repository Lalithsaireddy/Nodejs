const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 1000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url); // Log the URL requested

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Hi, I am Lalith</h1><p>This is the Node.js HTTP module</p>');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>Hi, I am Lalith</h1><p>This is the Node.js about page</p>');
    } 
    else if (req.url === '/hello') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');

        res.end(data.toString());
    }else {
        res.statusCode = 404;
        res.end('<h1>Hi, I am Lalith</h1><p>This page is not found</p>');
    }
});

server.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});

