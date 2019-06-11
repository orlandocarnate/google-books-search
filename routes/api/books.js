const router = require('express').Router();
const booksController = require("../../controllers/booksController");

// api/books route
router.route('/')
    .get(booksController.findAll)
    .post(booksController.create);
// api/books route
router.route('/searchlist')
    .get(booksController.findAll)
    .post(booksController.create);

// api/book/:id route
router.route('/:id')
    .get(booksController.findById)
    .put(booksController.saveBook)
    .delete(booksController.deleteBook);

module.exports = router;

