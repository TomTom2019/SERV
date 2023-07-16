
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


const Car = mongoose.model('Car',carSchema)
//////////

app.post('/api/addcar',(req,res)=>{
    console.log(req.body)
})




const port = process.env.POST || 3001;
app.listen(port);

