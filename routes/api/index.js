const router = require("express").Router();
const bookRoutes = require("./booksController");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
