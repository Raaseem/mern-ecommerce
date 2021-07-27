const mongoose = require('mongoose')

const mongoDBURL = 'mongodb+srv://raaseem:raaseem123@cluster0.v1mt2.mongodb.net/mern-ecommerce'

mongoose.connect(mongoDBURL, { useUnifiedTopology: true, useNewUrlParser: true })

var dbconnect = mongoose.connection

dbconnect.on('error', () => {
    console.log('Mongo DB Connection Failed')
})

dbconnect.on('connected', () => {
    console.log('Mongo DB Connection Successfully')
})

module.exports = mongoose