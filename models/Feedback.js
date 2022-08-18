"use strict";
class Feedback {//if class name no capital, markdown.
    constructor(id, recommendation, feedback_UserId, datePosted) {
        this.id = id;
        this.recommendation = recommendation;
        this.feedback_UserId = feedback_UserId;
        this.datePosted = datePosted;
    }
    //add the set and get methods here}
    getId(){
        return this.id;
    }
    getRecommendation(){
        return this.recommendation;
    }
    getFeedback_UserId(){
        return this.feedback_UserId;
    }
    getDatePosted(){
        return this.datePosted;
    }

    setRecommendation(newtext){
        this.recommendation = newtext
    }
    setFeedback_UserId(newusername){
        this.feedback_UserId = newusername;
    }
    setDatePosted(newdate){
        this.datePosted = newdate;
    }
}
module.exports = Feedback;


