
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const mongoUri = 'mongodb+srv://admin:testing123@cluster0.lwqgg.mongodb.net/MyApp?retryWrites=true&w=majority';


mongoose.connect(mongoUri)
app.use(bodyParser.json());


// MODEL => SCHEMA
const carSchema = mongoose.Schema({
    brand:String,
    model:String,
    year:Number,
    avail:Boolean
});

// TO GET DATA INSTALL body-parser
const Car = mongoose.model('Car',carSchema)

// model => Car
app.post('/api/addcar',(req,res)=>{
   const addCar = new Car({
    brand:req.body.brand,
    model:req.body.model,
    year:req.body.year,
    avail:req.body.avail
   })


    
    addCar.save((err,doc)=>{
        if(err) return console.log(err)
        res.sendStatus(200)
    })

})




const port = process.env.POST || 3001;
app.listen(port);

