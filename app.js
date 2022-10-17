const express = require('express');
const app = express();
const path = require('path');
const publicFolder= path.resolve('public');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(publicFolder));

const app_port=3412;
app.listen(app_port, () => {
    console.log('Servidor funcionando')
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve("views/login.html"))
})
app.get("/registro", (req, res) => {
    res.sendFile(path.resolve("views/register.html"))
})
app.get("/login", (req, res) => {
    res.sendFile(path.resolve("views/login.html"))
})
app.post("/", (req, res) => {
    return res.send(req.body)
})