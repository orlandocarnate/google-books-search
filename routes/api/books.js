const router = require('express').Router();
const booksController = require("../../controllers/booksController");

// api/books route
router.route('/')
    .get(booksController.findAll)
    .post(booksController.create);

