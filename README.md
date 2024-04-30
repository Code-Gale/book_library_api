## Book Library API
This is a simple RESTful API for managing a book library, built using Node.js, Express, and MongoDB.

## Setup
Clone the repository:
git clone <repository-url>

## Install dependencies:
npm install express mongodb mongoose nodemon

## Start the server:
nodemon app

## Endpoints
Add a Book
POST /books
Body:
title (String, required): Title of the book.
author (String, required): Author of the book.
year (Number, required): Year of publication.
Example:
{
  "title": "Example Book",
  "author": "John Doe",
  "year": 2020
}
List All Books
GET /books
Search for a Book by Title
GET /books/title/:title
Search for a Book by Author
GET /books/author/:author
Update Book Details
PUT /books/:id
Body (fields to update):
title (String): New title of the book.
author (String): New author of the book.
year (Number): New year of publication.
Delete a Book
DELETE /books/:id

## Dependencies
Express: Fast, unopinionated, minimalist web framework for Node.js.
Mongoose: Elegant MongoDB object modeling for Node.js.
Body-parser: Node.js body parsing middleware.


## Contributing
Contributions are welcome! Please feel free to submit issues and pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.