"use strict";

var db = require('../db-connections');
class UsersDB{

    // getAllUsers(callback){
    //     var sql = "select* from book_review.user"
    //     return db.query
    // }

    login(username,callback){
        var sql = "SELECT password from ctec.user WHERE username=?";
        console.log("THE USERNAME IS " + username);
        return db.query(sql,[username],callback);
        
    }

    // login(user,callback){
    //     var sql = "SELECT * from book_review.user WHERE username=? AND password=?";
    //     return db.query(sql,[user.getUsername(),user.getPassword()],callback);
    // }

    // getUserData(user,callback){
    //     var sql = "SELECT * from book_review.user WHERE username=? AND password=?";
    //     return db.query(sql,[user.getUsername(),user.getPassword()],callback);
    // }

    getPics(callback){
        var sql = "Select username, userpic from ctec.user"
        return db.query(sql,callback);
    }

    // addUser(user,callback){
    //     var sql = "INSERT INTO user (username, password) VALUES (?,?)";
    //     db.query(sql,[user.getUsername(), user.getPassword(), user.getEmail(),user.getUserpic(), user.getFirstname(), user.getLastname(),
    //     user.getGender(), user.getAddress(), user.getMobilenumber()], callback);
    // }

    addUser(user,callback){
        var sql = "INSERT INTO user (username, password, email, userpic, firstname, lastname, gender, address, mobilenumber) VALUES (?,?,?,?,?,?,?,?,?)";
        db.query(sql,[user.getUsername(), user.getPassword(), user.getEmail(),user.getUserpic(), user.getFirstname(), user.getLastname(),
        user.getGender(), user.getAddress(), user.getMobilenumber()], callback);
    }
    updateUser(user,callback){
        var sql = "UPDATE user SET firstname = ?, lastname = ?, gender = ?, address = ?, mobilenumber = ?  WHERE username = ?";
        db.query(sql, [user.getFirstname(), user.getLastname(), user.getGender(), user.getAddress(),
        user.getMobilenumber(),user.getUsername()],callback)
    }
    updateUserpic(user,callback){
        var sql = "UPDATE user SET userpic = ? WHERE username = ?"
        return db.query(sql,[user.getUserpic(), user.getUsername()],callback);
    }
    resetPassword(user,callback){
        var sql = "UPDATE user SET password=? WHERE email = ?"
        return db.query(sql,[user.getPassword(), user.getEmail()], callback)
    }
    removeAccount(user,callback){
        var sql = "DELETE from user where username = ?"
        return db.query(sql,[user.getUsername()], callback)
    }
}
module.exports = UsersDB;