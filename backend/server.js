const express = require('express')
const app = express()
const db = require('./model')
const dotenv = require("dotenv")
const mongoose = require('mongoose')
dotenv.config()

const port = process.env.PORT;
const url = process.env.URL;
const data = require('./data/data_json')

async function connect(){
    try{
        mongoose.connect(url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // console.log("connected to mongodb LOCAL!!")
    }
    catch(err){
        console.log(err);
    }
}
connect();


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/data', (req,res)=> {res.json(data)})
app.get('/demo', async(req,res)=> {
    const fetched_data = await db.find({});
    // console.log(more);
    res.json(fetched_data)
})

app.listen(port, async() => console.log(`Express server listening on PORT ${port}!`))
//testing mongoose (can pass event like open, error etc)
mongoose.connection.on("open",()=>{
    console.log("Mongoose connected TO local!!")
})