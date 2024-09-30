const posts=[
    {title:'Fruits I Like',body:'Orange,Mango,Grapes,Sapodilla'},
    {title:'Tasty ones',body:'Pink sauce pasta,rajma chawal,dairy milk'}
]

function getPosts2(){
    setTimeout(()=>{
        let output=' ';
        posts.forEach((post)=>{
        output+=`<li>${post.title} : ${post.body} : this content is dispalyed after 3 sec in method getPosts2()</li>`;
        document.body.innerHTML=output;
    })
},3000);
}

function createPost(post){
        return new Promise(
            (resolve,reject) => {
            setTimeout(() => {
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error:Something Went Wrong');
            }
        }, 4000);
    });
}


createPost({title:'post no. 3',body:'body 3 and returning it inside PROMISE'}).then(getPosts2).catch(err=>console.log(err));

const promise1=Promise.resolve('Hello,now can work with music...yeahhh')
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'this is printed out of promise , inside promise i write settimeout and in settimeout i print it');
})
console.log("result of all promises")
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));

const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));

async function init(){
    //wait for createPost to be done until we call getPosts2
    await createPost({title:'post no. 4',body:'body 4'});
    getPosts2();
}

init();

//Async await with fetch
async function fetchUsers(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await res.json();
    console.log(data);
}
fetchUsers();
