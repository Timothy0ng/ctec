
// currentuser = new User(this.user)
function fetchReviews() {
    var request = new XMLHttpRequest();

    request.open('GET', reviews_url, true);

    // var review = new Object();
    // review.reviews_bookId = book_array[currentIndex].id;

    //This command starts the calling of the reviews api
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        //get all the reviews records into our reviews array
        review_array = JSON.parse(request.responseText);
        // getPics();
        console.log(review_array);

    };

    request.send();
}

function openReview(){
    var token = sessionStorage.getItem("token")
    if (token==null) {
        $("#failReviewModal").modal('show');
    } else {
        document.getElementById("leaveReview").style.display="inline";
        document.getElementById("openReview").style.display="none";
    }
}

function addReview() {
    var review = new Object();
    review.id = null;
    review.reviews_BookId = book_array[currentIndex].id;
    review.reviews_UserId = current_user.username;
    review.review = document.getElementById("userReview").value;
    review.rating = rating;
    review.datePosted = null;
    // review.like = 0;
    // review.dislike = 0;

    console.log(review)

    var request = new XMLHttpRequest();

    request.open('POST', '/reviews', true);

    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        review_array += JSON.parse(request.responseText);
    fetchReviews();
    };

    console.log(review_array)
    
    
    request.send(JSON.stringify(review));
}

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var knives = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // knife images to use black and white.
    for (let knife of knives) {
        knife.setAttribute("src", knife_inactiveImage);
    }
    changeKnifeImage(num, classTarget);
}

function changeKnifeImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", knifeImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", knifeImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", knifeImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", knifeImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", knifeImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", knifeImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", knifeImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", knifeImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", knifeImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", knifeImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", knifeImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", knifeImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", knifeImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", knifeImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", knifeImage);
            rating = 5;
            break;
    }
}

function showBookReviews(element) {
    // document.getElementById("emptyreview").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    // document.getElementById("review").textContent = "Review for " + review_array[item].title;
    // document.getElementById("reviewBody").textContent = "";

    for (var i = 0; i < review_array.length; i++) {
        if (review_array[i].reviews_BookId === book_array[item].id) {
            // document.getElementById("emptyreview").innerHTML = "";
            selectedMovieId = review_array[item]._id;
            star = "";
            var html = '<div class="text-center" style="width:80%; padding-left:20vw;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                       \
                                    <p class="card-text" id="rating' + i + '">' + review_array[i].review + "</p>               \
                                    <small>by " + review_array[i].reviews_UserId + " @ " + review_array[i].datePosted + "</small>\
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";

                    
            document.getElementById("reviewsTable").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < review_array[i].rating; j++) {
                console.log(i);
                star += "<img src='https://ctecimages69.s3.amazonaws.com/pics/knife_active.png' style='width:7vw' />";
            }
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteReview(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editReviewsModal' data-dismiss='modal' item='" + i + "' onClick='editReview(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}



function editReview(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("editnickname").value = review_array[item].username;
    document.getElementById("edituserReviews").value = review_array[item].review;
    console.log(review_array[item].rating);
    // displayColorPopcorn('editpop', review_array[item].rating);
}

// function displayColorPopcorn(classname, num) {
//     var pop = document.getElementsByClassName(classname);
//     var classTarget = "." + classname;
//     for (let p of pop) {
//         p.setAttribute("src", popcornBWImage);
//     }
//     changePopcornImage(num, classTarget);
// }


function updateReview() {
    var response = confirm("Are you sure you want to update this review?");
    if (response == true) {
        // var edit_review_url = reviews_url + "/" + review_array[currentIndex]._id;
        var updateReview = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        updateReview.open("PUT", reviews_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateReview.setRequestHeader("Content-Type", "application/json");
        review_array[currentIndex].username = document.getElementById("editnickname").value;
        review_array[currentIndex].review = document.getElementById("edituserReviews").value;
        review_array[currentIndex].rating = rating;
        updateReview.onload = function () {
            fetchReviews();
        };
        updateReview.send(JSON.stringify(review_array[currentIndex]));
    }
}