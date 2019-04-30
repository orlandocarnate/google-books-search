var express = require("express");
var axios = require("axios");
var mongoose = require("mongoose");

// get Book and Doc models
const db = require("../models");

module.exports = function (app) {
    const url = "https://www.googleapis.com/books/v1/";

    // find all books
    app.get("api/books", function (request, response) {
        let findBooks = url + "volumes?q=" + request.body.search
        // use Axios to get info from Google Books API
        axios.get(findBooks)
        .then(function (axiosResponse) {
            response.json(axiosResponse.data)
        })
        .then(function () {
            // Return response
            console.log(axiosResponse.json({ data: values}))
        })
        // response.send("whatevs");
    });

    // save a book
    app.post("api/books", function (request, response) {
        // put a new book
        db.Book.put({}).then();
    });

    // delete a book
    app.delete("api/books", function (request, response) {
        // put a new book
        db.Book.destroy({}).then();
    });




}