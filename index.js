const { request, response } = require('express')
const express = require('express')

const app = express()

app.get('/users', (request, response) => {
    return response.send('Hello faust ')
})

app.listen(3000)