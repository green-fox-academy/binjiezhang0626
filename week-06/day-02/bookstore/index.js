require('dotenv').config()
const mysql = require('mysql')
const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use('/static', express.static('static'))
app.use(express.json())

const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})

conn.connect()
const sqlBookInfo = 'SELECT * FROM book_mast, category'
const sqlBookName = 'SELECT book_name FROM book_mast'


let queryWithPromise = sqlString =>
    new Promise((resolve, reject) => {
        conn.query(sqlString, (err, result) => {
            /*this err is only responsible for database, e.g sql statement is wrong, or database internal errors and the like.*/
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })

app.get('/books', async(req, res) => {
    try {
        let query = req.query
        let books = await queryWithPromise(sqlBookInfo)
        console.log(query.category)
        res.render('books', { books })
    } catch (err) {
        res.render('errorPage', { err })
    }
})

app.get('/booktitles', async(req, res) => {
    try {
        let titles = await queryWithPromise(sqlBookName)
        res.render('booktitles', { titles })
    } catch (err) {
        res.render('errorPage', { err })
    }
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}.`)
})