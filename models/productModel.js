const mongoose = require('mongoose')

const reveiwSchema = mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String
    },
    Comment: {
        type: String
    },
    rating: {
        type: Number,
        require: true
    }
}, {
    timeStamps: true
})
const productSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
    counterInStock: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    reivew: []
}, {
    timeStamps: true
})

const Product = mongoose.model('products', productSchema)

module.exports = Product