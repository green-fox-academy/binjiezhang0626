const mysql = require('mysql')
const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})

const queryWithPromise = sqlString =>
    new Promise((resolve, reject) => {
        conn.query(sqlString, (error, result) => {
            /*this err is only responsible for database, e.g sql statement is wrong, or database internal errors and the like.*/
            if (error) {
                reject(error)
            }
            resolve(result)
        })
    })

module.exports = queryWithPromise