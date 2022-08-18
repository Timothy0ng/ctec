"use strict";
class Review {//if class name no capital, markdown.
    constructor(id, reviews_BookId, reviews_UserId, review, rating, datePosted) {
        this.id = id;
        this.reviews_BookId = reviews_BookId;
        this.reviews_UserId = reviews_UserId;
        this.review = review;
        this.rating = rating;
        this.datePosted = datePosted;
        // this.like = like;
        // this.dislike = dislike;
    }
    //add the set and get methods here}

    getId() {
        return this.id;
    }
    getReviews_BookId() {
        return this.reviews_BookId;
    }
    getReviews_UserId() {
        return this.reviews_UserId;
    }
    getReview() {
        return this.review;
    }
    getRating() {
        return this.rating;
    }
    getDatePosted() {
        return this.datePosted;
    }
    // getLikes(){
    //     return this.like;
    // }
    // getDislikes(){
    //     return this.dislike;
    // }

    setReviews_BookId(book) {
        this.reviews_BookId = book;
    }
    setReviews_UserId(username) {
        this.reviews_UserId = username;
    }
    setReview(newtext) {
        this.review = newtext;
    }
    setRating(rating) {
        this.rating = rating;
    }
    setDatePosted(datePosted) {
        this.datePosted = datePosted;
    }

    
    // addAlike(){
    //     this.like += 1;
    //     return this.like;
    // }


    // addDislike(){
    //     this.dislike = this.dislike+1;
    //     return this.dislike;
    // }
}
module.exports = Review;
