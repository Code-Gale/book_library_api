const { Timestamp } = require('mongodb');
const mongoose = require('mongoose')

const Schema = express.Schema;

const bookSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true,
    },
    year : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    }
}, { Timestamp : true})

const Book = mongoose.model('book', bookSchema)
module.exports = Book