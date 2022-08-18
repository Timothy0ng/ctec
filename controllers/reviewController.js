"use strict";
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');
// const req = require('express/lib/request');

var reviewsDB = new ReviewsDB();

function getBookReviews(request, respond){//need fllw this sequence
    // var restID = request.body.reviews_BookId
    reviewsDB.getBookReviews(function(error,result){//need fllw this sequence
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function positiveSort(request, respond){//need fllw this sequence
    var restID = request.body.reviews_BookId
    reviewsDB.positiveSort(restID, function(error,result){//need fllw this sequence
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function negativeSort(request, respond){//need fllw this sequence
    var restID = request.body.reviews_BookId
    reviewsDB.negativeSort(restID, function(error,result){//need fllw this sequence
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addReview(request, respond){
    var now = new Date();
    var review = new Review(null, request.body.reviews_BookId, request.body.reviews_UserId,
        request.body.review, request.body.rating, now);
    reviewsDB.addReview(review, function (error,result){
        if(error) {
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
};

function updateReview(request,respond){
    var now = new Date();
    var review = new Review(request.body.id, request.body.reviews_BookId, request.body.reviews_UserId,
        request.body.review, request.body.rating, now);
    reviewsDB.updateReview(review, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteReview(request,respond){
    var reviewID = request.body.id;
    reviewsDB.deleteReview(reviewID, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllLikes(request, respond) {
    var id = request.body.id;
    reviewsDB.getAllLikes(id, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
}

function getAllDislikes(request, respond) {
    var id = request.body.id;
    reviewsDB.getAllDislikes(id, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function addLike(request, respond) {
    var id = request.body.id;
    // var review = new Review(id, null, null, null, null, null, null, null)
    reviewsDB.addLike(id, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function addDislike(request, respond) {
    var id = request.body.id;
    reviewsDB.addDislike(id, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function deductLike(request, respond) {
    var id = request.body.id;
    reviewsDB.deductLike(id, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}
function deductDislike(request, respond) {
    var id = request.body.id;
    reviewsDB.deductDislike(id, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}


module.exports = {getBookReviews, positiveSort, negativeSort, addReview, updateReview, deleteReview, 
getAllLikes, getAllDislikes, addLike, addDislike, deductLike, deductDislike};