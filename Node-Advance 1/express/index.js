const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    return res.send("hello from home page")
})
app.get('/about',(req,res)=>{
//    return res.send("hello from about page" +"hey  "+req.query.name+"you are"+req.query.age)
   return res.send(`hello from about page hey  ${req.query.name} you are ${req.query.age}`)
})
// http://localhost:3000/about?name=mansi&age=20-->try this url

app.listen(3000,console.log("server started at port 3000"))