const express = require('express');
const app = express();
const path = require('path');
const publicFolder= path.resolve('public');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(publicFolder));

const port= process.env.PORT || 3001;
app.listen(port, () => console.log('Servidor corriendo en el puerto ${port}'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("views/home.html"))
})
app.get("/register", (req, res) => {
    res.sendFile(path.resolve("views/register.html"))
})
app.get("/login", (req, res) => {
    res.sendFile(path.resolve("views/login.html"))
})
app.post("/", (req, res) => {
    return res.send(req.body)
})