"use strict";

var db = require('../db-connections');
class FeedbacksDB{
    getAllfeedbacks(callback){
        var sql = "SELECT * from ctec.feedback";
        db.query(sql,callback);
    }

    addfeedback(feedback,callback){
        var sql = "INSERT INTO feedback (id, recommendation, feedback_UserId, datePosted) VALUES (?,?,?,?)";//The question marks here represent placeholders for the value of each field. It has to match the number of field values you want to insert.
        db.query(sql, [feedback.getId(), feedback.getRecommendation(), feedback.getFeedback_UserId(),
        feedback.getDatePosted()], callback);
    }

    updatefeedback(feedback,callback){
        var sql = "UPDATE feedback SET recommendation = ?, datePosted = ? WHERE id = ?";
        return db.query(sql, [feedback.getRecommendation(),
        feedback.getDatePosted(),feedback.getId()], callback);
    }

    deletefeedback(feedbackID, callback){
        var sql = "DELETE from feedback where id = ?";
        return db.query(sql, [feedbackID], callback);
    }
}

module.exports = FeedbacksDB;