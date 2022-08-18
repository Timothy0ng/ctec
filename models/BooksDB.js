"use strict";

var db = require('../db-connections');
class BooksDB{
    getAllBooks(callback){
        var sql = "Select * from ctec.book";
        db.query(sql,callback);
    }

    getSearchedBooks(book, callback){
        var sql = "Select * from ctec.book WHERE name LIKE ? OR category like ?"
        db.query(sql,["%" + book.getName() + "%", "%" + book.getCategory() + "%"],callback);
    }

    // sortByRating(callback){
    //     var sql = "create temporary table tem (select book.name, reviews.rating from restaurant inner join reviews on restaurant.id = reviews.reviews_RestaurantId); select name, avg(rating) from tem group by name order by avg(rating) desc;"
    //     db.query(sql,callback);
    // }
    
    catFilter(cat, callback){
        var sql = "select * from ctec.book WHERE category = ?"
        db.query(sql,[cat],callback);
    }
}

module.exports = BooksDB;