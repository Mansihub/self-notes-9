const prompt=require('prompt')
const mysql = require("mysql2")

const con= mysql.createConnection({
    host : "localhost",
    user:"root",
    password:"root",
    database:"tumblr"
});


con.connect((err)=>{
    if (err){
        console.warn(err);
    }
    else{
        console.log("connected");
    }
})


async function saveImagesToDatabase(blogName,imgData){
try{
  let sql1=`CREATE TABLE IF NOT EXISTS ${blogName} (ImagesUrl varchar(100));`;
  con.query(sql1,(err,result)=>{
    if(err) throw err;
    console.log(`table created with name ${blogName}:`,result)
  })
  // let sql2=`Insert into ${blogName}(ImagesUrl) Values ${img};`;

  const insertImageQuery = `INSERT INTO ${blogName}(ImagesUrl) VALUES ?`;
  const values = imgData.map((img) => [img]);
  con.query(insertImageQuery, [values], (error, result) => {
    if (error) throw error;
    console.log('Image URLs inserted successfully:', result);
  });
  // imgData.forEach(img=>{
  //   con.query(`Insert into ${blogName}(ImagesUrl) Values ('${img}');`,(error,result)=>{
  //     if (error) throw error;
  //     console.log(`Image url inserted successfully`)
  //   })
//   })
}
catch(error){
  console.log('error saving the images to database',error)
}
}




// //now writing function for that takes tumblr blog name ,constructinng url and making request to api
async function getBlogContent(blogName) {
  const apiUrl = `https://${blogName}.tumblr.com/api/read/json`
  try {
  const response = await fetch(apiUrl)
  // console.log('hello type is', typeof(response))
  let newResponse=await response.text()
  let finalResponse=newResponse.slice(22,-2)
  let ourData=JSON.parse( finalResponse)
  // console.log('12346ui',ourData)
  // console.log('BASIC BLOG INFORMATION')
  // console.log('898',ourData.tumblelog)
  // console.log('879',ourData.posts)
  const imgData=[]
  ourData.posts.forEach(post => {
    if (post['photo-url-1280']){
      imgData.push(post['photo-url-1280'])
    }
  
  });
  return{imgData,blog:ourData.tumblelog.name}
  }
  catch (error) {
    return {error};
  }

}



//taking user input
async function main() {
  const {blogName}=await prompt.get(['blogName'])
  
  try {
  const {imgData,blog} = await getBlogContent(blogName);
  console.log({imgData,blog});
  saveImagesToDatabase(blogName,imgData);
}
catch(error){
console.log('Error occurred',error)
}
}

//Now we fetched the data in json format and printed it
//NOW,creating a function that prints the blog info
// Run the program
main();


