"use strict";
const BooksDB = require('../models/BooksDB');
const Book = require('../models/Book')

var booksDB = new BooksDB();

function getAllBooks(request, respond){
    booksDB.getAllBooks(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getSearchedBooks(request, respond){
    var input = request.body.name;
    var book = new Book(null, null, null, input, null, null)
    booksDB.getSearchedBooks(book, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function sortByRating(request, respond){
    booksDB.sortByRating(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function catFilter(request, respond){
    var cat = request.body.catergory
    booksDB.catFilter(cat, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllBooks, getSearchedBooks, sortByRating, catFilter};