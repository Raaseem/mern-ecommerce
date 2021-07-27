const express = require('express')
const bodyParser = require('body-parser');
const app = express();

var dbconnection = require('./db')
var productsRoute = require('./routes/productRoute')

app.use(bodyParser.json())
app.use('/api/products/', productsRoute)

app.get('/', (req, res) => {
    res.send('This is from Backend')
})


const port = 8000;
app.listen(port, () => console.log(`server is running on $port`))