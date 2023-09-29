const bodyParser = require("body-parser");
const express = require("express");
//const mysql = require("mysql");
const services = require("./services/db")
const app = express();
const employeRouter = require("./routes/employeRouter")

const port = 3030

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use("/v1",employeRouter)

// //cretae connection
// const db = mysql.createConnection({
//     port: 3306,
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'mytestdatabase',
// })
// // console.log(connection, "connection-----------------------")

// db.connect(err => {
//     if (err) {
//         console.log('Error not connected to database')
//         console.log(err)
//         return
//     }
//     console.log('Connection established successfully!')
// })

//connection.end()

app.get("/createDB", (req, res) => {
    let sql = "CREATE DATABASE mytestdatabase";
    console.log(sql, "sql----------------------")
    db.query(sql, (err, result) => {
        res.send('Database created successfully!...')
    })
})



//create table customers
app.get("/createUsertbl", (req, res) => {
    let sql = 'CREATE TABLE customers(id int AUTO_INCREMENT,fullname VARCHAR(255),address VARCHAR(255),PRIMARY KEY(id))';
    console.log(sql, "sql--------------------")
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.error(result, "result----------------");
        res.send(sql, 'User table created successfully!...')
    })

})

//insert employe data
// app.post("/studenttabl", (req, res) => {
//     var id = req.body.id;
//     var fullname = req.body.fullname;
//     var address = req.body.address
//     console.log("id------------------", id)
//     // db.connect(function (err) {
//     //     if (err) throw err;
//     var sql = "INSERT INTO employe(id,fullname,address) VALUES (?,?,?)";
//     db.query(sql, [id, fullname, address], function (error, result) {
//         if (error) throw error;
//         return res.send(result), {
//             message: "Employe data created successfully!",
//         }
//     })
// })

//get all data
app.get("/employetble", (req, res) => {
    try {
        var sql = "select *From employe";
        db.query(sql, (error, result) => {
            if (error) throw error;
            return res.send(result), {
                message: "Employe table find successfully!",
            }
        })
    } catch (error) {
        return res.status(500).json, {
            message: "Unexpected erro,please try again later!"
        }
    }

})

//filter address by 
app.get("/filteremp", (req, res) => {
    try {
        var sql = "SELECT * FROM employe WHERE address = 'vijaynagar'";
        db.query(sql, (error, result) => {
            if (error) throw error;
            return res.send(result), {
                message: "Employe address find successfully!",
            }
        })
    } catch (error) {
        return res.status(500).json, {
            message: "Unexpected erro,please try again later!"
        }
    }
})

//Order by Emp name
app.get("/orderbyname", (req, res) => {
    try {
        var sql = "SELECT * FROM employe ORDER BY fullname DESC ";
        db.query(sql, (error, result) => {
            if (error) throw error;
            return res.send(result), {
                message: "Employe address find successfully!",
            }
        })
    } catch (error) {
        return res.status(500).json, {
            message: "Unexpected erro,please try again later!"
        }
    }
})


app.listen(port, () => console.log(`app listen on port ${port}`))