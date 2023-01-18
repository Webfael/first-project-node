/* 
    - Query params => meusite.com/users?name=rodolfo&age=28 // FILTROS

    app.get('/users', (request, response) => {
    
    const {name, age} = request.query 

    return response.json(json)
})
    - Route params => /users/2 // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECIFICO

    app.get('/users/:id', (request, response) => {
    
    const {id} = request.params 

    return response.json({id})
})

    - Request Body => {"name":"Rafael", "age":"40"}

    app.get('/users', (request, response) => {
    
    const {name, age} = request.body 

    return response.json({name, age})
})

    - GET           => Busca informações no back-end
    - POST          => Criar informações no back-end
    - PUT / PATCH   => Alterar/Atualizar informações no back-end
    - DELETE        => Deletar informações no back-end

    - Middleware     => INTERCEPTADOR - Tem o pode de parar ou alterar dados da requisição 

*/
const express = require('express')

const uuid = require('uuid')

const port = 3000

const app = express()

app.use(express.json())

const users = []

const checkUserId = (request, response, next) => {
    const { id } = request.params
    
    const index = users.findIndex(user => user.id === id)
    
    if(index < 0){
        return response.status(404).json({error: "User nothing found"})
    }

    request.userIndex = index
    request.userId = id

    next()

}

app.get('/users', (request, response) => {
  
    return response.json(users)
})

app.post('/users', (request, response) => {
    const {name, age} = request.body

    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return response.status(201).json(user)
})

app.put('/users/:id', checkUserId, (request, response) => {
    const { name, age } = request.body
    const index = request.userIndex
    const id = request.userId

    const updateUser = { id, name, age }
    
    users[index] = updateUser

    return response.json(updateUser)
})

app.delete('/users/:id', checkUserId, (request, response) => {
    const index = request.userIndex

    users.splice(index,1)

    return response.status(204).json()
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})