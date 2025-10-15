import express from "express"
const app = express()

app.get ('/', (req, res)=> {
    res.send("Você está na página inicial")
})

app.post('/', (req, res)=> {
    res.send("Você esta na página inicial usando o método post")
})