const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello world!..");
})

server.listen(3001, ()=>{
    console.log("Server is running on port 3001");
})