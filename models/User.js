"use strict";
class User {//if class name no capital, markdown.
    constructor(username, password, email, userpic, firstname, lastname, gender, address, mobilenumber) {
        this.username=username;
        this.password=password;
        this.email=email;
        this.userpic=userpic;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.address = address;
        this.mobilenumber = mobilenumber;
    }
    //add the set and get methods here}

    getUsername() {
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    getEmail(){
        return this.email;
    }
    getUserpic(){
        return this.userpic;
    }
    getFirstname(){
        return this.firstname;
    }
    getLastname(){
        return this.lastname;
    }
    getGender(){
        return this.gender;
    }
    getAddress(){
        return this.address;
    }
    getMobilenumber(){
        return this.mobilenumber;
    }

    setPassword(password){
        this.password=password;
    }
    setUserpic(userpic){
        this.userpic=userpic;
    }
    setFirstname(firstname){
        this.firstname = firstname;
    }
    setLastname(lastname){
        this.lastname = lastname;
    }
    setGender(gender){
        this.gender = gender;
    }
    setAddress(address){
        this.address = address;
    }
    setMobilenumber(mobilenumber){
        this.mobilenumber = mobilenumber;
    }
}
module.exports = User;


