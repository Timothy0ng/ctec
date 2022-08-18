$(document).ready(function () {

     var token = sessionStorage.getItem("token");
     if (token != null) {
        window.location.href="profile.html";
     }
     else{
        window.location.href="signIn.html";
     }
})