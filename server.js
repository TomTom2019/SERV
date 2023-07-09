
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();


// MIDDLEWARE code... next() aplly middleware en other code below
app.use('/css',express.static(__dirname+'/public/css'))
app.use('/',(req,res,next)=>{
  console.log('request for:' + req.url)
  res.cookie('cookieName','cookieValue')
  next()
})

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send(`
        <html>
        <head>
        <link rel="stylesheet" href="/css/styles.css">
        </head>
            <body>
                <h1>Hello !!</h1>
            </body>
        </html>
    `)
});

/* app is global  const is not global
jsonParser add ('/api/adduser',jsonParser,(req,res)
 urlencoderParser add ('/api/queryadd',urlencodedParser,(req,res)=>*/
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended:false})

// get file
app.get('/user',(req,res)=>{
    let HTML = fs.readFileSync(`${__dirname}/views/user.html`);
    res.send(`${HTML}`)
})

// then add route
app.post('/api/adduser',jsonParser,(req,res)=>{
    console.log(req.body);
    res.sendStatus(200);
})

app.get('/querystring',(req,res)=>{
    let HTML = fs.readFileSync(`${__dirname}/views/querystring.html`);
    res.send(`${HTML}`)
})

app.post('/api/queryadd',urlencodedParser,(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    console.log(firstname + ' ' + lastname)

    res.sendStatus(200);
})


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