"use strict";

var db = require('../db-connections');
class ReviewsDB{
    getBookReviews(callback){
        var sql = "SELECT * from ctec.reviews ORDER BY datePosted DESC";
        db.query(sql,callback);
    }

    positiveSort(restID, callback){
        var sql = "SELECT * from ctec.reviews where reviews_BookId=? ORDER BY rating DESC";
        db.query(sql,[restID],callback);
    }
    negativeSort(restID, callback){
        var sql = "SELECT * from ctec.reviews where reviews_BookId=? ORDER BY rating ASC";
        db.query(sql,[restID],callback);
    }

    addReview(review,callback){
        var sql = "INSERT INTO reviews (id, reviews_BookId, reviews_UserId, review, rating, datePosted) VALUES (?,?,?,?,?,?)";//The question marks here represent placeholders for the value of each field. It has to match the number of field values you want to insert.
        db.query(sql, [review.getId(), review.getReviews_BookId(), review.getReviews_UserId(),
        review.getReview(), review.getRating(), review.getDatePosted()], callback);
    }

    updateReview(review, callback){
        var sql = "UPDATE reviews SET review = ?, reviews_UserId = ?, rating = ?, datePosted = ? WHERE id=?";
        return db.query(sql, [review.getReview(), review.getReviews_UserId() , review.getRating(),
        review.getDatePosted(),review.getId()], callback);
    }

    deleteReview(ReviewID, callback){
        var sql = "DELETE from reviews where id = ?";
        return db.query(sql, [ReviewID], callback);
    }

    getAllLikes(reviewID,callback){
        var sql = "SELECT likes from reviews where id = ?";
        db.query(sql,[reviewID],callback);
        console.log(db.query(sql,[reviewID],callback))
    }

    getAllDislikes(reviewID,callback){
        var sql = "SELECT dislikes from reviews where id = ?";
        db.query(sql,[reviewID],callback);
    }

    //may need put update reviews
    addLike(reviewID,callback){
        var sql  ="UPDATE book_review.reviews set likes=likes+1 Where id = ?"
        return db.query(sql,[reviewID],callback)
    }

    addDislike(reviewID, callback){
        var sql  ="UPDATE book_review.reviews set dislikes=dislikes+1 Where id = ?"
        return db.query(sql,[reviewID],callback)
    }

    deductLike(reviewID,callback){
        var sql  ="UPDATE ctec.reviews set likes=likes-1 Where id = ?"
        return db.query(sql,[reviewID],callback)
    }
    
    deductDislike(reviewID, callback){
        var sql  ="UPDATE ctec.reviews set dislikes=dislikes-1 Where id = ?"
        return db.query(sql,[reviewID],callback)
    }
}

module.exports = ReviewsDB;