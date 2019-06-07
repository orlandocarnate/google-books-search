var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Create a NEW schema called books
let BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: Array,
    description: String,
    image: String,
    link: String,
    date: String,
    bookId: String
});

let Books = mongoose.model("Books", BookSchema);

// export the Book model to be used in apiRoutes or Server.js
module.exports = Books;