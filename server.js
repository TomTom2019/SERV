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

app.get('/api/user',(req,res)=>{
    res.send({
        name:"tony",
        lastname:"daless"
    })
})

const PORT = process.env.PORT || 8080
app.listen(PORT)