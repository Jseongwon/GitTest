const express = require('express')
const app = express()
const port = 3005
const cors = require('cors')
const CryptoJS = require('crypto.js');

app.use(cors());

// bodyParser 적용
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mysql = require('mysql');

let query = "CREATE TABLE User (id int NOT NULL PRIMARY KEY AUTO_INCREMENT, name varchar(32) NOT NULL);";

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'd1320123',
    database: 'ExpressTest'
});

app.post('/insert', (req, res) => {
    console.log(req.body);
    let name = req.body.name;
    conn.query(`INSERT INTO User(name) VALUES ('${name}');`, (err, rows, field) => {
        if(err) throw err;
        res.send(rows);
    });
});

app.post('/delete', (req, res) => {
    let id = req.body.id;
    conn.query(`DELETE FROM User Where id=${id};`, (err, rows, field) => {
        if(err) throw err;
        res.send(rows);
    });
});

app.post('/update', (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    conn.query(`Update User SET name = '${name}' WHERE id=${id};`, (err, rows, field) => {
        if(err) throw err;
        res.send(rows);
    });
});

app.get('/select', (req, res) => {
    conn.query('SELECT * FROM User;', (err, rows, field) => {
        if(err) throw err;

        let secretKey = 'secret key';
        let resultMessage;
        // let isEncryption = true;
        //
        // let decryptionMessage;
        //
        // try {
        //     decryptionMessage = CryptoJS.AES.decrypt(rows);
        //     console.log("Encryption");
        // } catch (ex){
        //     isEncryption = false;
        //     console.log("Decryption");
        // }
        //
        // resultMessage = rows;
        // if(isEncryption == true){
        //     resultMessage = decryptionMessage;
        // }
        //
        res.send(rows);

        resultMessage = CryptoJS.AES.encrypt(JSON.stringify(rows), secretKey).toString();
        console.log(resultMessage);
    });
})

app.get('/', (req, res) => {
    res.send('Hello World!')
});

//app.use()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});