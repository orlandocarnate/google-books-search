const router = require('express').Router();
const booksController = require("../../controllers/booksController");

// api/books route
router.route('/')
    .get(booksController.findAll);

// api/book/:id route
router.route('/:id')
    .get(booksController.findById)
    .post(booksController.saveBook)
    .delete(booksController.deleteBook)

