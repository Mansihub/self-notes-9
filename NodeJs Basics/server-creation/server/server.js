const express=require('express')
const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    res.send('hello this is home page')
})
app.get('/user',(req,res)=>{
    res.send({message:'hello express'});
})
app.get('/enroll',(req,res)=>{
    res.status(200).send({"message":"data received"});
})

app.listen(PORT,()=>{
console.log('Server running on port: '+PORT)
})




