
const express = require('express')
const app = express()


app.get('/',(req,res) => {
    console.log();
    res.status(200).send('Home page')
    
})
app.get('/about',(req,res) => {
    console.log();
    res.status(200).send('About page')
    
})

app.listen(5000, () => {
    console.log('server is running .....');
    
})

