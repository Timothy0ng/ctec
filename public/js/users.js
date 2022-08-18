
function getAllUsers(){
    
}

// function login(){
//     var request = new XMLHttpRequest();
//     request.open('Post', login_url, true);

//     var user = new Object();
//     username = document.getElementById("username").value.toString();
//     user.username = username;
//     user.password = document.getElementById("password").value.toString();


//     var payload={"username": '"' + username + '"',
//                 "password": '"' + password + '"'}
//     request.onload = function () {
//         current_user = JSON.parse(request.responseText);
//         console.log(username);
//         console.log(user.password);
//         console.log(request.responseText);
//         console.log(current_user);
//     };
//     request.send(JSON.stringify(user));
// }


// boss
function login() {
   var loginUser = new XMLHttpRequest();
  
   loginUser.open("POST", "/login", true);
   loginUser.setRequestHeader("Content-Type", "application/json");
   loginUser.onload = function () {
   //   $("#loginModal").modal("hide");
     
     var token = JSON.parse(loginUser.responseText);
     console.log("LOGIN = " + token.result);
     if (token.result != 'invalid') {
         document.getElementById('modal_username').textContent = username + "!"
        //  current_user.username = username;
       $('#successModal').modal('show');
       // document.getElementById("registerMenu").style.display="none";
       // document.getElementById("loginMenu").style.display="none";
       // document.getElementById("logoutMenu").style.display="block";
       // document.getElementById("editMenu").style.display="block";
       sessionStorage.setItem("token",token.result);
       // setTimeout(() => {  window.location.reload('index.html'); }, 2000);
  
     } else {
       $('#failModal').modal('show');
     }
   };
  
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
  
   var payload = { username: username, password: password };
  
   //console.log("payload = " + payload)
  
   loginUser.send(JSON.stringify(payload));
   
   //window.location.reload('index.html');
}

function logout(){
    sessionStorage.removeItem("token");
}


// mine
// function login(){
//     var request = new XMLHttpRequest();
//     request.open('Post', '/login', true);

//     var user = new Object();
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
    
//     //user.username = username;
//     // user.password = document.getElementById("password").value;
//     request.onload = function () {
//         current_user = JSON.parse(request.responseText);
//         var token = JSON.parse(request.responseText);
//         console.log(token.result);

//         if (token.result!="invalid") {
//             document.getElementById("modal_username").textContent = document.getElementById("username").value;
//             $('#successModal').modal('show');
//             sessionStorage.setItem("token",token.result);
//             // current_user.username = username;
//         } else {
//             $('#failModal').modal('show');
//         }

//     };
//     var payload={username:username,password:password}
//     request.send(JSON.stringify(payload));
// }

function signupToggle(){
    document.getElementById("loginbtn").textContent="Sign up";
    document.getElementById("loginbtn").onclick = function(){addUser()};
}

function addUser(){
    var request = new XMLHttpRequest();
    request.open('Post', user_url, true);
    var user = new Object();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    user.username = username;
    user.password = password;
    user.email = email;
    // var payload = {username:username, password:password, email:email}
    request.send(JSON.stringify(user));

    // request.onload = function(){

    // }
}

function getPics(){
    var request = new XMLHttpRequest();
    request.open('Post', pics_url, true);
    request.onload = function () {
        userpics_array = JSON.parse(request.responseText);
        createPicDic();
    };
    request.send();
}

function createPicDic(){
    for (var count = 0; count < userpics_array.length; count++){
        userpics_dict[userpics_array[count].username]=userpics_array[count].userpic
    }
}

// function recogniseUser() {
//     var request = new XMLHttpRequest();

//     request.open('Get', user_url, true);
//     request.onload = function () {
//         current_user = JSON.parse(request.body.user);
//     };
//     request.send();
// }




// function fetchUserData() {
//     var request = new XMLHttpRequest();

//     request.open('Get', user_url, true);
//     request.onload = function () {
//         current_user = JSON.parse(request.responseText);
//     };
//     request.send();
// }



// function login() {
//     var usersdb = new UsersDB;
//     var login_url = user_url + "/" + user_array[currentIndex]._username;
//     var login = new XMLHttpRequest();
//     login.open('GET', login_url, true);
//     login.onload = function () {
//         recogniseUser();
//         var actual = usersdb.getPassword(this.current_user)
//         var input = document.getElementById("password").value;
//         if (input == actual) {
//             fetchUserData();
//         }
//         else {
//             //make smth that prompts user to type agn
//             var html = '<div class="text-center" style="width:100%;">                                                           \
//             <div class="card">                                                                                  \
//                 <div class="card-body">                                                                         \
//                     <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>               \
//                     <small>by " + comment_array[i].username + " @ " + comment_array[i].datePosted + "</small>   \
//                 </div>                                                                                          \
//                 </div>                                                                                          \
//             </div>;                                                                                             \
            
//             document.getElementById("password").insertAdjacentHTML('beforeend',html);
//         }
//     }
// }