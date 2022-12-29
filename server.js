const express = require('express')
const app = express()
const db = require('./model')
const dotenv = require("dotenv")
const mongoose = require('mongoose')

global.bodyParser = require('body-parser');
dotenv.config()


const port = process.env.PORT || 5000;
const url = process.env.URL;


//------------------- SOME UNKNOWN CODE  -------------------

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 100000,
  })
);
app.use(
  bodyParser.json({
    limit: "50mb",
    parameterLimit: 100000,
  })
);

app.use(function (req, res, next) {                         //its to enable cors basically without this you won't get responses 
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//------------------- SOME UNKNOWN CODE  -------------------

  
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

//get requests
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/demo', async(req,res)=> {                             //will give you the mongodb local stored db data
    const fetched_data = await db.find({});                         
    res.json(fetched_data)
})


//post requests
app.post('/upload',(req,res)=>{          //to upload data just now find a wat to pass data from frontend to server backend that's it
    const user = new db(
        {acc: req.body.acc},
        {versionKey:false}
    );
    user.save().then(result => {
        res.status(201).json({
            message: "User registered successfully!",
            userCreated: {
               acc: result.acc,
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

app.listen(port, async() => console.log(`Express server listening on PORT ${port}!`))


//testing mongoose (YOU can pass event like open, error etc)
mongoose.connection.on("open",()=>{
    console.log("Connected To the Remote Database!!")
})


module.exports = app;