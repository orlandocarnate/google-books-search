var mongoose = require("mongoose");

// get Book and Doc models
const db = require("../models");

module.exports = {
    // 'api/books' GET
    findAll(req, res) {
        db.Books.find({})
            // .sort({ date: -1 })
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(422).json(err));
    },

    // 'api/books' POST
    saveFavorite(req, res) {
        db.Books.create(req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    // 'api/books/:id' DELETE
    deleteFavorite(req, res) {
        db.Books.findById(req.params.id)
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    }
};