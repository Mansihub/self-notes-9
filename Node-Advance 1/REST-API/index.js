const express=require('express')
const users=require('./MOCK_DATA.json')
const fs=require('fs')
const app=express()
const PORT=8000;

//middleware to use for reading user data 
//middleware runs at each request
app.use(express.urlencoded({extended:false}));
app.use(express.json())

//ROUTES
app.get('/users',(req,res)=>{
    const html=
    `<ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join(" ")}
    </ul>`
    res.send(html)
})
app.get('/api/users',(req,res)=>{
    res.json(users)
})
app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    // now will find user of the requested id in the json file
    const user=users.find((user)=>user.id===id)
    return res.send(user)
}
)


app.post('/api/users',(req,res)=>{
    const body=req.body;
    console.log(body);
    // add the data to our database
    // users.push(
    //     first_name=body.first_name,
    //     email=body.email
    // )
    //other way:append to users
    users.push(body)
    // users.push({...body,id:users.length +1})
    // entry added with id one more than the id of last element in file
    //in above case we will require fs module
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id:users.length})
    })
    
})

//method to follow when we do not want to write same route again and again in different requests
app
.route('/api/users/:id')
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id)
    return res.send(user)
})
.patch((req,res)=>{ 
    //edit user with given id
    return res.json({status:"Pending"})
})
.delete((req,res)=>{
    //delete user with given id
    return res.json({status:"Pending"})
})


app.listen(PORT,()=>{console.log(`server started at port ${PORT}`)})