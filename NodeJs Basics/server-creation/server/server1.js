import http from 'http'
const server=http.createServer()
server.listen(3000);

//now handling the request event and handling routes also
server.on('request',(req,res)=>{
    console.log('REQUEST!!!',req.url);
    if(req.url=='/user'){
        res.write('hello user');
    }
    else{
        res.write('Hello Mansi');
    }
    res.end();
});
