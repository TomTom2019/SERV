const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
///
const mongoUri = ''

const client = new MongoClient(mongoUri);

//create your post here backen
app.get('/api/users',async(req,res)=>{
    try {
        await client.connect();
        const database = client.db('myApp');
        const collection = database.collection('users');
        const query = await collection.insertOne({
            name:'Tom',
            lastname:'Dale'
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



   



const port = process.env.POST || 3001;
app.listen(port);

