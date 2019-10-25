const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

const handler = (action, array) => {
    if (action === 'sum') {
        return array.reduce((result, value) => result + value)
    } else if (action === 'multiply') {
        return array.reduce((result, value) => result * value)
    } else if (action === 'double') {
        return array.map(number => number * 2)
    }
}

app.use(express.json())

app.post('/arrays', (req, res) => {
    if (req.body.numbers) {
        res.json({
            "result": handler(req.body.what, req.body.numbers)
        })
    } else {
        res.json({ "error": "Please provide what to do with the numbers!" })
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})