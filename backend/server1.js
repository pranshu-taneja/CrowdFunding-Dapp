const express = require('express')
const app = express()

const mongoose = require('mongoose')
const URL = "mongodb://localhost:27017/demo"

const dotenv = require("dotenv")
dotenv.config()

const port = process.env.PORT;

const data = require('./data/data_json')

async function connect(){
    try{
        await mongoose.connect(URL);
        console.log("CONNECTED MONGODB LOCAL")
    }
    catch(err){
        console.log(err);
    }
}
connect();


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/data', (req,res)=> {res.json(data)})
app.listen(port, async() => console.log(`Example app listening on port ${port}!`))