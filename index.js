const express = require("express");
const app = express();


require('dotenv').config();
const port = process.env.PORT || 9000;
app.use(express.json());


app.listen(port, ()=>console.log("El servidor está escuchando en el port", port))

const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@proyectofinalcluster.kshe6if.mongodb.net/"+process.env.DB_NAME+"?retryWrites=true&w=majority"

mongoose.connect(mongoDB)
.then (()=>console.log('Conectado correctamente a MondoDB Atlas'))
.catch(err => console.log(err));

//Esto lo recibimos sin ruta
app.get('/', (req, res) => {
    res.status(200).send({msj:'Hello World!'})
})


//cargar rutas
const rooms = require('./src/routes/rooms.js')
app.use('/rooms', rooms)






