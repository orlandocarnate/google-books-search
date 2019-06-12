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
    // 'api/books/favorites' GET
    getFavorites(req, res) {
        db.Books.find({})
            // .sort({ date: -1 })
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(422).json(err));
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
    saveSearchList(req, res) {
        console.log(req.body.items);
        const books = req.body.items.map(item => {
            return ({
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                description: item.volumeInfo.description,
                image: item.volumeInfo.imageLinks.smallThumbnail,
                link: item.volumeInfo.infoLink
            })
        })
        db.Books.create(books)
            .then(dbBook => res.json(dbBook))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    // clear search list
    clearSearch(req, res) {
        db.Books.remove({})
            .then(results => res.json(results))
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