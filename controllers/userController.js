"use strict";
const UsersDB = require('../models/UsersDB');
const User = require('../models/User');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
var pkey = "idk"
// const req = require('express/lib/request');

var usersDB = new UsersDB();

// function login(request, respond) {
//     var username = request.body.username;
//     var password = request.body.password;
//     var user = new User(username,password,null,null,null,null,null,null,null);
//     usersDB.login(user, function (error, result) {
//         if (error) {
//             respond.json(error)
//         }
//         else {
//             respond.json(result)
//         }
//     });
// }

function login(request, respond) {
    var username = request.body.username
    var password = request.body.password;
    //console.log('THE PASSWORD IS ' + password);
    usersDB.login(username, function (error, result) {
        if (error) {
            respond.json(error)
        }
        else {
            var encryptedpw = result[0].password;
            const hash = result[0].password
            //console.log(result[0].password);
            var encryptChecker = bcrypt.compareSync(password,hash)
            if (encryptChecker) {
                var token = jwt.sign(username,pkey) 
                respond.json({result:token});
                // current_user.username = username;
            } else {
                respond.json({result:"invalid"});
            }
        }
    });
}


// function getUserData(request, respond) {
//     var username = request.body.username
//     usersDB.getUserData(username, function (error, result) {
//         if (error) {
//             respond.json(error)
//         }
//         else {
//             // var encryptedpw = result.password;
//             const hash = result[0].password
//             var encryptChecker = bcrypt.compareSync(request.body.password,hash)
//             if (encryptChecker) {
//                 var token = jwt.sign(username,pkey) 
//                 respond.json({result:token});
//             } else {
//                 respond.json({result:"invalid"});
//             }
//         }
//     });
// }

function getPics(request,respond){
    usersDB.getPics(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}

function addUser(request, respond) {
    // normal = request.body.password;
    // encrypted = bcrypt.hashSync(request.body.password,10)
    var user = new User(request.body.username,bcrypt.hashSync(request.body.password,10),
        request.body.email, request.body.userPic, request.body.firstname, request.body.lastname,
        request.body.gender, request.body.address, request.body.mobilenumber);
    usersDB.addUser(user, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json("Hi " + request.body.username  +"!" + result);
        }
    })
};

function updateUserPic(request, respond) {
    var user = new User(request.body.username, null, null, request.body.userpic, null, null, null, null, null)
    // var user = request.body.username;
    // var newPic = request.body.userPic;
    usersDB.updateUserpic(user, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}

function updateUser(request,respond){
    var user = new User(request.body.username, null, null, null, request.body.firstname, request.body.lastname, 
        request.body.gender, request.body.address, request.body.mobilenumber);
    
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token,pkey);
        usersDB.updateUser(user, function(error,result){
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        })
    } catch (error) {
        respond.json({result: "invalid token"})
    }
        // usersDB.updateUser(user, function(error,result){
        //     if (error) {
        //         respond.json(error);
        //     }
        //     else {
        //         respond.json(result);
        //     }
        // })
}

function resetPassword(request, respond) {
    var user = new User(null, request.body.password,
        request.body.email, null)
    usersDB.resetPassword(user, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}

function removeAccount(request, respond) {
    // var user = request.body.username;
    var user = new User(request.body.username, null,
        null, null)
    usersDB.removeAccount(user, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json("Bye " + request.body.username + " :(" + result);
        }
    })
}
module.exports = { login, getPics, addUser, updateUserPic, updateUser, resetPassword, removeAccount }