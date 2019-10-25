const express = require('express')
const path = require('path')

const app = express()
const PORT = 8080

const sum = number => {
    let result = 0
    for (let i = 0; i <= number; i++) {
        result = result + i
    }
    return result
}

const factor = number => {
    let result = 1
    for (let i = 1; i <= number; i++) {
        result = result * i
    }
    return result
}
app.use(express.json())
app.use(express.static('assets'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

// doubling
app.get('/doubling', (req, res) => {
    if (req.query.input) {
        res.json({
            "received": req.query.input,
            "result": req.query.input * 2
        })
    } else {
        res.json({
            "error": "Please provide an input!"
        })
    }
})

// greeter
app.get('/greeter', (req, res) => {
    if (req.query.name && req.query.title) {
        res.json({
            "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
        })
    } else if (!req.query.name && !req.query.title) {
        res.json({
            "error": "Please provide a name and a title!"
        })
    } else if (!req.query.name) {
        res.json({
            "error": "Please provide a name!"
        })
    } else if (!req.query.title) {
        res.json({
            "error": "Please provide a title!"
        })
    }
})

// AppendA
app.get('/appenda/:appendable', (req, res) => {
    res.json({
        "appended": req.params.appendable + "a"
    })
})

// do until
app.post('/dountil/:action', (req, res) => {
    if (req.params.action === 'sum') {
        res.json({
            "result": sum(req.body.until)
        })
    } else if (req.params.action === 'factor') {
        res.json({
            "result": factor(req.body.until)
        })
    } else {
        res.json({
            error: 'Please provide a number!'
        })
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})