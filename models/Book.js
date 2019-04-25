var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Create a NEW schema called books
let BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },

})

let Book = mongoose.model("Book", BookSchema);

// export the Book model to be used in apiRoutes or Server.js
module.exports = Book;