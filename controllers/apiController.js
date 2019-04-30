var express = require("express");
var axios = require("axios");
var mongoose = require("mongoose");

// get Book and Doc models
// const db = require("../models");

module.exports = function (app) {
    const url = "https://www.googleapis.com/books/v1/";

    // Do a Search from FORM POST
    app.post("/api/books", function (request, response) {
        let findBooksUrl = url + "volumes?q=" + request.body.search
        // use Axios to get info from Google Books API
        axios({
            method: 'GET',
            url: findBooksUrl
        })
        .then(function (axiosResponse) {
            response.json(axiosResponse.data)
        })

    });


    // delete a book
    app.delete("/api/books", function (request, response) {
        // put a new book
        db.Book.destroy({}).then();
    });




}