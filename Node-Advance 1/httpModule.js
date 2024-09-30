
//Let's create a server
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Hello Mansi');
    }
})

server.listen(3000);

console.log("listening on port 3000");
