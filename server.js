var express = require("express"); //using the express web framework

var reviewController =  require('./controllers/reviewController');
var userController = require('./controllers/userController');
var feedbackController = require('./controllers/feedbackController');
// var opinionController = require('./controllers/opinionController');
var booksController = require('./controllers/booksController');

var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

//original
app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
//add on
//app.use(express.static("./my_one"));
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited reviews from user
app.route('/reviews').get(reviewController.getBookReviews);
app.route('/positive').get(reviewController.positiveSort);
app.route('/negative').get(reviewController.negativeSort);
app.route('/reviews').post(reviewController.addReview);
app.route('/reviews').put(reviewController.updateReview);
app.route('/reviews').delete(reviewController.deleteReview);
app.route('/likes').get(reviewController.getAllLikes);
app.route('/dislikes').get(reviewController.getAllDislikes);
app.route('/like').put(reviewController.addLike);
app.route('/dislike').put(reviewController.addDislike);
app.route('/minuslike').put(reviewController.deductLike);
app.route('/minusdislike').put(reviewController.deductDislike);

app.route('/login').post(userController.login);
app.route('/pics').post(userController.getPics);
app.route('/users').post(userController.addUser);
app.route('/users').put(userController.updateUser);
app.route('/pic').put(userController.updateUserPic);
app.route('/resetpassword').put(userController.resetPassword);
app.route('/users').delete(userController.removeAccount);

app.route('/feedback').get(feedbackController.getAllfeedbacks);
app.route('/feedback').post(feedbackController.addfeedback);
app.route('/feedback').put(feedbackController.updatefeedback);
app.route('/feedback').delete(feedbackController.deletefeedback);

//change ltr
// app.route('/likes').get(opinionController.getAllLikes);
// app.route('/dislikes').get(opinionController.getAllDislikes);
// app.route('/like').put(opinionController.addLike);
// app.route('/dislike').put(opinionController.addDislike);
// app.route('/opinions').get(opinionController.deleteOpinion);

app.route('/books').get(booksController.getAllBooks);
app.route('/booksearch').get(booksController.getSearchedBooks);
app.route('/ratingsort').get(booksController.sortByRating);
app.route('/catsort').get(booksController.catFilter);



app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); // output to console 