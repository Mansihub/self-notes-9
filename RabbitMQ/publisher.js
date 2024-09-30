const amqp=require('amqplib')
const msg={number:5}
connect();
async function connect(){
    try{
const connection=await amqp.connect("amqp://localhost:5672")
const channel=await connection.createChannel();
const result=await channel.assertQueue("jobs");
channel.sendToQueue("jobs",Buffer.from(JSON.stringify(msg)))
// sending an array of buffer to the queue nsmed jobs
console.log(`job sent succesfully ${msg.number}`)
    }
    catch(ex){
        console.error(ex)
    }
}
