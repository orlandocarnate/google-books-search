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
    saveSearchList(req, res) {
        console.log(req.body.items);
        const books = req.body.items.map( item => {
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