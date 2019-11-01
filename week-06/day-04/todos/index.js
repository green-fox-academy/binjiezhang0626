require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
let todos = [{
        "id": 1,
        "text": "Wake up",
        "done": true
    },
    {
        "id": 2,
        "text": "Do some work",
        "done": false
    }
]

const handlePost = text => {
    let maxId = todos[todos.length - 1].id
    let newTodo = {
        "id": maxId + 1,
        "text": text,
        "done": false
    }
    todos.push(newTodo)
    return newTodo
}

const handleDelete = id => {
    let deleteId = parseInt(id)
    let originLength = todos.length
    todos = todos.filter(todo => todo.id != deleteId)
    let newLength = todos.length
    return newLength === originLength ? 404 : 204
}

const handlePut = (id, text) => {
    let changeId = parseInt(id)
    let todo = findById(changeId)
    todo.text = text
    todos.push(todo)
    return todo
}

const findById = id => {
    return todo = todos.filter(todo => todo.id === id)[0]
}

const idExist = id => {
    let idToNumber = parseInt(id)
    let originLength = todos.length
    todos = todos.filter(todo => todo.id != idToNumber)
    let newLength = todos.length
    return newLength === originLength ? false : true
}

app.use(express.json())

app.get('/api/todos', (req, res) => {
    res.send(JSON.stringify(todos))
})

app.post('/api/todos', (req, res) => {
    if (req.body.text) {
        let response = handlePost(req.body.text)
        res.statusCode = 201
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(response))
    } else {
        res.statusCode = 400
        res.end()
    }
})

app.delete('/api/todos/:id', (req, res) => {
    let response = handleDelete(req.params.id)
    res.statusCode = response
    res.end()
})

app.put('/api/todos/:id', (req, res) => {
    let response = handlePut(req.params.id, req.body.text)
    if (idExist(req.params.id)) {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(response))
    } else {
        res.statusCode = 404
        res.end()
    }
})

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})