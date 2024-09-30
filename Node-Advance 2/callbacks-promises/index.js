console.log('Let\'s study')
setTimeout(function(){
    console.log('print after 3 sec')
},3000)

let promise=new Promise(
    function(resolve,reject){ 
   resolve(56)
})
console.log(promise)

let promise1=new Promise(function(resolve,reject){
    console.log('promise1 is pending')
    setTimeout(function(){
        console.log('i am promise1 and fulfilled')
        resolve(true)
    },7000)
})

let promise2=new Promise(function(resolve,reject){
    console.log('promise2 is pending')
    setTimeout(function(){
    console.log('i am promise2 and fulfilled')
    reject(new Error('i am error'))
},7000)
})

// both promise 1 and 2 will be fired and will run parallely and will get result for both after 5 sec
// to get value from prommise
promise1.then((value)=>{
    console.log(value)
})

// to catch error in promise
promise2.catch((error)=>{
    console.log('some error occurred in promise2')
})

// 2nd method:
promise2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})

let p1=new Promise((resolve,reject)=>{
    console.log('p1 is created')
    setTimeout(()=>{
        console.log('p1 is resolved')
        resolve(76)
    },3000)
})

//Promise inside promise

p1.then((value)=>{
    console.log("value returned by p1 is:",value)
    // let p2=new Promise((resolve,reject)=>{
    //    setTimeout(()=>{resolve('p2 resolved after p1')},5000) 
    // })
    // return p2

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('p2 resolved after p1')},5000) 
     })

}).then((value)=>{
    console.log("both p1 and p2 are done")
})

// multiple handlers to a promise

let p3=new Promise((resolve,reject)=>{
    console.log('hey i am p3 and i am not resolved yet')
    setTimeout(()=>{
resolve(1)
},4000)
})

p3.then(()=>{
    console.log("congratulations p3 is now resolved") 
})
p3.then(()=>{
    console.log("multiple handlers to p3") 
})
// above 2 handlers for p3 run independently
