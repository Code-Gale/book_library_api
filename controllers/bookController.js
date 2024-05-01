//get_books, add_book, delete_book, update_book, 
//find_book_by_author, find_book_by_title
const Book = require('../models/book')
const mongoose = require('mongoose')
//get all books
const get_books = (req, res) => {
    const books = Book.find({}, { title : 1,  author : 1, _id : 0})
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            console.log(err)
        })
}
//add a new book
const add_book = (req, res) => {
    const { title, author, year, category} = req.body
    const book = new Book({ title, author, year, category })
    book.save()
        .then((result) => {
            res.status(201).json('Book added to Library...')
        })
        .catch((err) => {
            console.log(err)
        })
}
//find a book by title
const find_book_by_title = (req, res) => {
    const { title } = req.body
    const book = Book.findByOne({ title })
        .then((result) => {
            if(!book){
                res.status(404).json('Book Not Found')
            } else{
                res.status(201).json(result)
            }
        })
        .catch((err) => {
            res.status(404).json(err)
        })

}
//find a book by author
const find_book_by_author = (req, res) => {
    const { author } = req.body
    const book = Book.find({ author })
        .then((result) => {
            if(!book){
                res.status(404).json('Could not find Author...')
            } else {
                res.status(201).json(book)
            }
        })
        .catch((err) => {
            res.status(404).json(err)
        })

}
//update a book
const update_book = (req, res) => {
    const { id } = req.params
    const { title, author, year, category} = req.body
    const book = Book.findByIdAndUpdate(new mongoose.Types.ObjectId(id), { title, author, year, category })
        .then((result) => {
            if(!Book){
                res.status(404).json('Could not find Book')
            } else {
                res.status(201).json('Book Updated Successfully')
            }
        })
        .catch((err) => {
            res.status(404).json(err)
        })
}
//delete a book
const delete_book = (req, res) => {
    const { id } = req.params
    Book.findByIdAndDelete(new mongoose.Types.ObjectId(id))
        .then((result) => {
            if(!Book){
                res.status(404).json('Could not find Book...')
            }
            else{
                res.status(201).json('Book Deleted Successfully...')
            }
        })
        .catch((err) => {
            res.status(404).json(err)
        })
}
module.exports = {
    get_books,
    add_book,
    find_book_by_author,
    find_book_by_title,
    delete_book,
    update_book
}