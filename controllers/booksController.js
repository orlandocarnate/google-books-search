var mongoose = require("mongoose");

// get Book and Doc models
const db = require("../models");

module.exports = {
    // 'api/books' GET
    findAll(req, res) {
        db.Books.find(req.query)
        .then(dbBooks => res.json(dbBooks))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    
    // 'api/books/:id' GET
    findById(req, res) {
        db.Books.findById(req.params.id)
        .then(dbBook => res.json(dbBook))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    
    // 'api/books' POST
    saveBook(req, res) {
        db.Books.create(req.body)
        .then(dbBook => res.json(dbBook))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    
    // 'api/books/:id' DELETE
    deleteBook(req, res) {
        db.Books.findById(req.params.id)
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    }
};