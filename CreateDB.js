const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'd1320123'
});

conn.connect(function (err){
    if(err) throw err;
    console.log('Connected');
    conn.query('CREATE DATABASE ExpressTest', function (err, result){
        if(err) throw err;
        console.log('Database Created!');
    });
    conn.end();
});