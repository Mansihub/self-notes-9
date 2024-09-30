//middleware:it is a function which gets run before every route
const  express = require("express");
const app = express();

const myMiddleware=function(req,res,next){
    console.log("logged");
    next();
}

app.use(myMiddleware)

app.get('/',(req,res)=>{
    res.send("Middleware concept")
})

//req contains the user data means data of someone who is visiting the route
//res-->data sent by server
///we can run as many middleware as we want
//In above case,when we hit localhost:3000 then "logged" will be printed in vs code terminal

app.listen(3000);