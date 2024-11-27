
const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')


app.use([logger,authorize])


app.get('/',(req,res) => {
    res.send('Home page')
    console.log(req.user);
    
})


app.listen(5000, () => {
    console.log('server is running .....');
    
})

