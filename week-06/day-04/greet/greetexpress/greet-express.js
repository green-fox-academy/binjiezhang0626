require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
let count = 0

app.get('/greeting', (req, res) => {
    count += 1
    res.send({
        "greetCount": count,
        "content": "Hello, " + (req.query.name ? req.query.name : "guest")
    })
})

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})