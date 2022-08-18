var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    //this is bcos its running on laptop. If it is other machine, put the ip address.
    port:'3306',
    user:'root',
    password:'cdev',
    database:'ctec'  //CHANGE LATER
});

connection.connect(err => {
    if(err) throw err;
    console.log('Connected To DB');
});
module.exports = connection;