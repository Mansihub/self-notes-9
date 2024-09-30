//first we will include the express module:saving express in express named variable
var express=require('express');
//create an instance to handle request and response:now we run the express variable using ()
const app=express();
// work done by express now can be done by app variable as we assigned in above line
app.use(function(req,res,next){
    console.log(req);
    // above line-->for printing user info
    console.log('middlware working');
    next();
    // for sending request to next route,we call next
    });
//app.use runs first of all
//first page of website ends with '/' -->facebook.com/
app.get('/',(req,res)=>{
res.send("hello mansi");
//sending json response
res.json({message:"hello,learning routes in express"});}
);
//above fxn tells the server what to do when a 'get' request to given route is called
//req and res are objects given by express to us


app.get('/users',(req,res)=>{;
    res.json({message:"get all users"});}
    );

//Dynamic routing->use colon-->colon means anything can replace it
//If we get id from req para then write as following
app.get('/users/:id',(req,res)=>{
        res.json({message:`this is user with id ${req.params.id}`});}
        );


app.post('/users/',(req,res)=>{
            res.json({message:'create new user'});}
            );

app.put('/users/:id',(req,res)=>{
     res.json({message:`Update the user id  ${req.params.id}`});}
                );


app.delete('/users/:id',(req,res)=>{
                    res.json({message:`Delete user with id ${req.params.id}`});}
 );

//the listen fxn starts a port and host
app.listen(5000,()=>{console.log('starting with express..listening on port 5000!')});

// error handling
app.get('/error',function(req,res,next){
    throw new Error('something went wrong'); 
    //we can also skip the new keyword above
});

