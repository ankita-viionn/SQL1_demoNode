const mysql = require('mysql');
// const conn = mysql.createConnection({
//     port: 3306,
//     host: 'localhost',
//     database: 'node_demo',
//     user: 'admin',
//     password: 'Sqlmy@123',
// });

// conn.connect();

// // module.exports = conn;


// const mysql = require('mysql')

// const connection = mysql.createConnection({
//   port: 3306,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'mytestdatabase',

// })
// // console.log(connection, "connection-----------------------")

// connection.connect(err => {
//   if (err) {
//     console.log('Error not connected to database')
//     console.log(err)
//     return
//   }
//   console.log('Connection established successfully!')
// })

// connection.end()


//cretae connection
const db = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mytestdatabase',
})
// console.log(connection, "connection-----------------------")

db.connect(err => {
    if (err) {
        console.log('Error not connected to database')
        console.log(err)
        return
    }
    console.log('Connection established successfully!')
})

module.exports = db;