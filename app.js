// Usando objeto express
const express = require('express')

// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// GET crea un endpoint que regrese una lista de explorers
// HTTP METHODS

app.get('/v1/explorers', (req, res) =>{
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Gris1"}
    const explorer2 = {id: 2, name: "Gris2"}
    const explorer3 = {id: 3, name: "Gris3"}
    const explorer4 = {id: 1, name: "Gris4"}
    const explorer5 = {id: 1, name: "Gris5"}
    const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5]
    res.status(200).json(explorers)
})

// Con esto inicializamos la app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
})
