"use strict";
const FeedbacksDB = require('../models/feedbacksDB');
const Feedback = require('../models/Feedback');

var feedbacksDB = new FeedbacksDB();

function getAllfeedbacks(request, respond){//need fllw this sequence
    feedbacksDB.getAllfeedbacks(function(error,result){//need fllw this sequence
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addfeedback(request, respond){
    var now = new Date();
    var feedback = new Feedback(null, request.body.recommendation,
        request.body.feedback_UserId, now);
    feedbacksDB.addfeedback(feedback, function (error,result){
        if(error) {
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
};

function updatefeedback(request,respond){
    var now = new Date();
    var feedback = new Feedback(request.body.id, request.body.recommendation
        , now);
    feedbacksDB.updatefeedback(feedback, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deletefeedback(request,respond){
    var feedbackID = request.body.id;
    feedbacksDB.deletefeedback(feedbackID, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllfeedbacks, addfeedback, updatefeedback, deletefeedback};