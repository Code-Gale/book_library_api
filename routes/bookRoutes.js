const route = require('express').Router()

const bookController = require('../controllers/bookController')
//getting all books
route.get('/', bookController.get_books)
//adding books
route.post('/books', bookController.add_book)
//search for a book by title
route.get('/books/titles/:title', bookController.find_book_by_title)
//search for book by author
route.get('/books/authors/:author', bookController.find_book_by_author)
//update book details
route.put('/books/:id', bookController.update_book)
//delete a book
route.delete('/books/:id', bookController.delete_book)

module.exports = route;
