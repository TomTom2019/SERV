const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const mongoUri = '';

mongoose.connect(mongoUri);
app.use(bodyParser.json());


////////// SCHEMA ////////

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});

const Car = mongoose.model('Car',carSchema)

//////////////////////////


app.get('/api/getcars',(req,res)=>{
    Car.find({},(err,doc)=>{
        if(err) return console.log(err);
        res.json(doc)
    })
})


app.post('/api/addcar',(req,res)=>{
    const addCar = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year:  req.body.year,
        avail: req.body.avail
    })

    addCar.save((err,doc)=>{
        if(err) return console.log(err)
        res.sendStatus(200)
    })
})


app.post('/api/removecar',(req,res)=>{
    const brand = req.body.brand;
    Car.remove({brand:brand},(err,doc)=>{
        if(err) return console.log(err)
        res.json(doc)
    })
})


app.post('/api/updatecar',(req,res)=>{
    const id = req.body.id;
    const brand = req.body.brand;
   

    Car.findById(id,(err,car)=>{
        if(err) return console.log(err)
        car.set({
            brand:brand,
           
        })

        car.save((err,doc)=>{
            if(err) return console.log(err)
            res.json(doc)
        })
    })
})



const port = process.env.POST || 3001;
app.listen(port);






