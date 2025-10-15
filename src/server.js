import express from "express"
import { Database } from "./databases.js"
const app = express()
app.use(express.json())

app.get ('/', (req, res)=> {
    res.send("Você está na página inicial")
})

const usuarios = []
app.get ('/usuario', (req, res)=> {
    const data = Database.select("usuario")
    res.status(200).json(data)
})

app.post('/usuario', (req, res)=> {
    const {nome, idade, email} = req.body
    if (nome, idade, email) {
        Database.insert("usuario", {nome, idade, email})
        return res.status(201).send("Usuário Criado")
    }
    return res.status(400).send("Informações inválidas")
})
app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333")
})