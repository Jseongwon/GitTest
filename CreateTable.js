const mysql = require('mysql');

let query = "CREATE TABLE User (id int NOT NULL PRIMARY KEY AUTO_INCREMENT, name varchar(32) NOT NULL);";

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'd1320123',
    database: 'ExpressTest'
});

conn.connect(function (err){
    if(err) throw err;
    console.log('Connected');
    conn.query(query, function (err, result){
        if(err) throw err;
        console.log('Database Created!');
    });
    conn.end();
});