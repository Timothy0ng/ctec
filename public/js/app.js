//users
var userpics_array=[]
var userpics_dict={}
var user_url = "/users";
var login_url= "/login";
var pics_url= "/pics";
var current_user = {username:"tom"};


// books
var books_url = "/books"
var booksearch_url = "/booksearch"
var bookrating_url = "/ratingsort"
var books_array=[]
var catergory=""
var searchstatus = true;

var reviews_url = "/reviews"
var review_array = []
var rating = null;
var knife_inactiveImage= 'https://ctecimages69.s3.amazonaws.com/pics/knife_inactive.png';
var knifeImage = 'https://ctecimages69.s3.amazonaws.com/pics/knife_active.png';






var movie_url = "/movies";
var movie_array = []; // This creates an empty movie array
var movieCount = 0;
/*  There are two categories: "Now Showing" and "Coming Soon". This variable states which 
    category of movies should be listed when the home page is first loaded. */
var category = "Now Showing";
var currentIndex=0;

var comment_url = "/comments";
var comment_array = []; // This creates an empty comment array


