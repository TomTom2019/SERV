// first npm init

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(`
        <html>
            <body>
                <h1>Hello !!</h1>
            </body>
        </html>
    `)
});

//PARAMS - DONT FORGET :user/:id
// no forget api =>http://localhost:8080/api/tony/55
app.get('/api/:user/:id',(req,res)=>{
    let id = req.params.id;
    let user = req.params.user
    res.send(`
        <html>
            <body>
                <h1>The user name is ${user} and the id is ${id}</h1>
            </body>
        </html>
    `)
})

// querystring = hhh.com/cat?brand=batar&year=2007
app.get('/api/cat',(req,res)=>{
    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
        brand,
        year
    })
})



const PORT = process.env.PORT || 8080
app.listen(PORT)