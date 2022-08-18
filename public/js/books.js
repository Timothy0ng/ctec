//This function is to call the books api and get all the books

// function changeSearchStatus(){
//     if(searchstatus==true){
//         searchstatus=false;
//     }
//     else{
//         searchstatus=true
//     }
// }

function toggler(){
    if(searchstatus==true){
        getBooksData();
    }
    else{
        getSearchedBooks();
    }
}

function getBooksData(){
    var request = new XMLHttpRequest();
    request.open('GET', "/books", true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the books records into our book array        
        book_array = JSON.parse(request.responseText);
        //Fetch the comments as well  
              
        fetchReviews();
        console.log(book_array)	
        displayAllBooks();
        // fetchReviews()
    };

    //This command starts the calling of the books web api    
    request.send();
}

function displayAllBooks() {
    var table = document.getElementById("booksTable");
    var bookCount = 0;
    // var message = "";

    table.innerHTML = "";
    totalbooks = book_array.length;
    for (var count = 0; count < totalbooks; count++) {
            var thumbnail = book_array[count].bookpic;
            var title = book_array[count].name;
            var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body">\
                        <h5 style="padding-left:30px;cursor:pointer" class="card-title" item="' + count + '" onClick="showBookDetails(this); showBookReviews(this)">' + title + '</h5>\
                        </div>\
</div>'
            table.insertAdjacentHTML('beforeend', cell);
            bookCount++;
    }
    // message = bookCount + " books " + catergory;
    // document.getElementById("summary").textContent = message;
    // document.getElementById("parent").textContent = "";
}


function displayBooks(category) {
    var table = document.getElementById("booksTable");
    var bookCount = 0;
    // var message = "";

    table.innerHTML = "";
    totalbooks = book_array.length;
    for (var count = 0; count < totalbooks; count++) {
        if (book_array[count].category == category) {
            var thumbnail = book_array[count].bookpic;
            var title = book_array[count].name;
            var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body">\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="tab" href="book.html" data-target="#theBook" class="card-title" item="' + count + '" onClick="showBookDetails(this)">' + title + '</h5>\
                        </div>\
</div>'
            table.insertAdjacentHTML('beforeend', cell);
            bookCount++;
        }
    }
}



//This function is to display the "Now Showing" books
function listActionBooks() {
    catergory = "Action";
    displayBooks(catergory);
    document.getElementById("ActionMenu").classList.add("active");
    document.getElementById("HorrorMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" books
function listHorrorBooks() {
    catergory = "Horror";
    displayBooks(catergory);
    document.getElementById("ActionMenu").classList.remove("active");
    document.getElementById("HorrorMenu").classList.add("active");
}

//This function is to display the individual books details
//whenever the user clicks on "See More"
function showBookDetails(element) {
    // document.getElementById("booksTable").style.display = 'none'
    // document.getElementById("stickybtn").style.display = 'none'
    document.getElementById("homestart").style.display = 'none'

    var item = element.getAttribute("item");
    // console.log(book_array[item].id)
    currentIndex = item;

    document.getElementById("theBook").style.display = 'inline'
    document.getElementById("bookName").textContent = book_array[item].name;
    document.getElementById("bookPic").src = book_array[item].bookpic;
    document.getElementById("category").textContent = book_array[item].category;
    document.getElementById("bio").textContent = book_array[item].bio;
    // document.getElementById("content").src = book_array[item].content;
    // console.log(book_array[item].content)

    // document.getElementById("story").textContent = book_array[item].story;
    // document.getElementById("trailer1").src = book_array[item].video1;
    // document.getElementById("trailer2").src = book_array[item].video2;
}

//This function opens a new window/tab and loads the
//particular book in the cinema website
function buyTicket() {
    window.open(book_array[currentIndex].buy, "_blank");
}

function getSearchedBooks(){
    searchstatus = false;
    var request = new XMLHttpRequest();
    var userinput = document.getElementById("searchbar").value;
    request.open('GET', booksearch_url, true);
    request.onload = function () {
        alert(userinput);
        book_array = JSON.parse(request.responseText);              
        console.log("rgwgrtw  = " + book_array)	
        displaySearchedbooks(userinput);    
        // fetchReviews()
    };
    request.send(userinput);
}

function displaySearchedBooks(userinput) {
    var table = document.getElementById("booksTable");
    var bookCount = 0;
    // var message = "";

    table.innerHTML = "";
    totalbooks = book_array.length;
    for (var count = 0; count < totalbooks; count++) {
        var name = book_array[count].name;
        if (name.includes(userinput)) {
            var thumbnail = book_array[count].bookpic;
            var title = book_array[count].name;
            var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body">\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="tab" href="book.html" data-target="#theBook" class="card-title" item="' + count + '" onClick="showBookDetails(this)">' + title + '</h5>\
                        </div>\
</div>'
            table.insertAdjacentHTML('beforeend', cell);
            bookCount++;
        }
    }
}