"use strict;"

function phoneF(phone){
    if(phone.matches){
        document.getElementById('collapsibleBtn').appendChild(document.getElementById('collapsibleNavbar'))
    }
    else{

    }
}

var phone = window.matchMedia("(max-width: 700px)")

phoneF(phone)

phone.addListener(phoneF);