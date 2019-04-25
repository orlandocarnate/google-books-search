var express = require("express");
var axios = require("axios");
var mongoose = require("mongoose");

// get Book and Doc models
const db = require("../models");

module.exports = function (app) {
    // find all books
    api.get("api/books", function (request, response) {
        // use Axios to get info from Google Books API
        axios.get("googeapi").then(function () {
            // Assin axiosResponse to variables: title, author, etc
        }).then(function () {
            // Return response
            axiosResponse.json({ data: values})
        })
        response.send("whatevs");
    });

    // save a book
    api.post("api/books", function (request, response) {
        // put a new book
        db.Book.put({}).then();
    });

    // delete a book
    api.delete("api/books", function (request, response) {
        // put a new book
        db.Book.destroy({}).then();
    });




}