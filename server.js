const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
///
const mongoUri = 'mongodb+srv://admin:testing123@cluster0.lwqgg.mongodb.net/authApp?retryWrites=true&w=majority'

const client = new MongoClient(mongoUri);


app.get('/api/users',async(req,res)=>{
    try {
        await client.connect();
        const database = client.db('myApp');
        const collection = database.collection('users');
        const query = await collection.insertOne({
            name:'Francis',
            lastname:'Jones'
        })
        console.log(query)
        res.status(200).json({awesome:'yes'})
    } catch(error){
        throw error
    } finally {
        await client.close();
        console.log('all is done')
    }
})



// MongoClient.connect(mongoUri,(err, client)=>{
//     if(err){
//         throw err
//     }
//     console.log('Connected to the DB')
// });


const port = process.env.POST || 3808;
app.listen(port);

/// francis8976
/// YaTNPCXktKNJvR20