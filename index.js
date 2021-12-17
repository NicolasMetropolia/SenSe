const express = require('express')
const mqtt = require('mqtt')
const broker = "mqtt://192.168.1.254:1883"
const topic = "test/sample/#"
const clientID = "project"
let client = mqtt.connect(broker, {clientId: clientID})
const app = express();
let msg
const ejs = require('ejs')
const data = []

app.set ('view engine', 'ejs')

client.on("connect", ()=> {
    console.log("connected to Mqtt");
    client.subscribe(topic);
    setInterval(function (){
        client.publish('time', (new Date).toLocaleString())
    }, 5000)
});
client.on("error", error => {
    console.log("Can't connect" + error);
    process.exit(1);
});
client.on('message',(topic, message)=>{
    console.log(message.toString());
    msg = message;
    data.push(message+', Timestamp:  '+ (new Date).toLocaleString())
});
app.get('/', (req,res)=> {
    res.render('index',{messages:data});
    data.length = 0;

})
app.listen(3000);