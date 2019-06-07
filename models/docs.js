var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Create a NEW schema called books
let DocSchema = new Schema({
    title: {
        type: String,
        required: true
    },

})

let Doc = mongoose.model("Doc", DocSchema);

// export the Book model to be used in apiRoutes or Server.js
module.exports = Doc;