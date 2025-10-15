import express from "express"
const app = express()
app.use(express.json())

app.get ('/', (req, res)=> {
    res.send("Você está na página inicial")
})

const usuarios = []
app.get ('/usuario', (req, res)=> {
    res.status(200).json(usuarios)
})

app.post('/usuario', (req, res)=> {
    const {nome, idade} = req.body
    usuarios.push({nome, idade})
    console.log(nome, idade)

    res.status(201).send("Usuário Criado")
})