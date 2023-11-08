
const Book = require('../models/bookModel');
const AppError = require('../utils/AppError');

async function addBook(req, res) {
    try {
        console.log(req.body);
        let {
            id,
            title,
            pages_scanned,
            ID_url, 
            author_name,
            publisher_name,
            year,
            total_pages, 
            } = req.body;
            console.log(req.body);
        console.log(id,title, pages_scanned);
        // if (!title || !author_name || !publisher_name || !pages_scanned || !total_pages || !ID_url || !year) {
        //     throw  new AppError("All Fields are required", 400);
        // }
        // Create a new book record and associate it with the initial edition
        const newBook = new Book({ 
            id, 
            title, 
            pages_scanned, 
            ID_url,
            author_name,
            publisher_name, 
            year,
            total_pages
          });
        await newBook.save();
        console.log(newBook);
        res.status(201).json(
            { message: 'New book added' }
        );
    } catch (error) {
        // console.error('Error adding a new book:', error);
        const e = new AppError("Error adding a new book: "+error.message, 400);
        e.sendResponse(res)
    }
}

async function updateBook(req, res) {
    try {
        const bookId = req.params.id;
        const { title, author_name,publisher_name, pages_scanned, total_pages, ID_url, year } = req.body;

        // Update the book details in the Books collection
        const updatedBook = await Book.findByIdAndUpdate(
            bookId,
            { title, author_name, publisher_name, pages_scanned, total_pages, ID_url, year},
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(
            { message: 'Book updated successfully', updatedBook });
    } catch (error) {
        // console.error('Error updating book:', error);
        const e = new AppError("Error Updating book: "+error.message, 400);
        e.sendResponse(res)    }
}


module.exports = {
    addBook,
    updateBook
};