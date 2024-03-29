require("dotenv").config();
const mysql = require("mysql");
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

con.connect((err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log("sql connected");
    };
});

module.exports = con;