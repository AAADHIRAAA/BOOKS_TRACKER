const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id:String,
    title: String,
    pages_scanned: Number,
    ID_url:String,
    author_name: String,
    publisher_name: String,
    year:Number,
    total_pages: Number    
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
