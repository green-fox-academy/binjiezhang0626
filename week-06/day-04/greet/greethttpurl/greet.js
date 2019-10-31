require('dotenv').config()
const http = require('http')
const url = require('url')
const port = process.env.PORT
let count = 0

let server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true)
    const show = (req, res) => {
        var name = 'guest'

        if (reqUrl.query.name) {
            name = reqUrl.query.name
            count += 1
        }
        var response = {
            "greetCount": count,
            "content": "Hello, " + name
        }

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(response))
    }
    if (reqUrl.pathname == '/greeting' && req.method === 'GET') {
        show(req, res)
    }
})

server.listen(port, () => {
    console.log(`Server running at ${port}`)
})