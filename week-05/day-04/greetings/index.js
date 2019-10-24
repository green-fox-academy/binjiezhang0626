const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const { query } = req
    res.render('home', { 
        title: 'Greetings',
        query })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})