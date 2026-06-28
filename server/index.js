//IMPORTACIONES
import express from "express";



//INICIALIZACION
const app = express();
const PORT = 3000;



//Ruta de prueba
app.get("/", (req, res) => {
    res.send("Hello world!")
});



//Encendido del servidor
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});
