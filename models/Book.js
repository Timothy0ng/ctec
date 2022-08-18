"use strict";
class Book {//if class name no capital, markdown.
    constructor(id, category, bookpic, name, bio, content) {
        this.id = id;
        this.category = category;
        this.bookpic = bookpic;
        this.name = name;
        this.bio = bio;
        this.content = content;
    }
    //add the set and get methods here}
    getId(){
        return this.id;
    }
    getCategory(){
        return this.category;
    }
    getBookpic(){
        return this.bookpic;
    }
    getName(){
        return this.name;
    }
    getBio(){
        return this.bio;
    }
    getContent(){
        return this.content;
    }


    setCategory(category){
        this.category = category;
    }
    setBookpic(bookpic){
        this.bookpic = bookpic;
    }
    setName(name){
        this.name = name;
    }
}
module.exports = Book;


