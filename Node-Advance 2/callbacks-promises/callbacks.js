const posts=[
    {title:'Fruits',body:'Orange,Mango,Grapes,Sapodilla'},
    {title:'French',body:'Pink sauce pasta,rajma chawal,dairy milk'}
]

// Displaying the posts in different ways
//Way 1:using document.write
posts.forEach(function(post){
    document.write(`${post.title} ${post.body}`);//use backticks
});

posts.forEach(post=>{
    document.write(`${post.title} ${post.body}`);//use backticks
});
// output of above 2 will be visible when we first visit to site.



// Adding post after 4 sec and then display after 7 sec so this post will be visible on webpage when all posts are displayed
function createPost(post){
    setTimeout(() => {
        posts.push(post);
    }, 4000);
}

createPost({
    title:'post no. 3',body:'body 3' 
})

//Way2:document.body.innerHTML
function getPosts(){
setTimeout(function(){
    let output=' ';
    posts.forEach((post)=>{
        output+=`<li>${post.title} : ${post.body}</li>`;
        document.body.innerHTML=output;
    })
},7000)
}
getPosts();


function getPosts2(){
    setTimeout(()=>{
        let output=' ';
        posts.forEach((post)=>{
        output+=`<li>${post.title} :::::::::::: ${post.body} : this content is dispalyed after 7 sec</li>`;
        document.body.innerHTML=output;
    })
},9000);
}
getPosts2();

//if i give same timeout to getposts() and getposts2() output of first one will be overwritten

//  callback function:
// we will make getpost as callback fxn means it has to be run after new post has been added .
// So, we will pass the getpost fxn as parameter to createpost

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        //after pushing the new post to the array we will run callback
        callback();
    }, 3000);
}

createPost({
    title:'post no. 4',body:'body 4 and this  is pushed later and then all post displayed'
},getPosts2)
//we will not use () while passing it as parameter
//now we will not call getPosts2 directly