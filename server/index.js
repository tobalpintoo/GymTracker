//IMPORTACIONES
import express from "express";



//INICIALIZACION
const app = express();
const PORT = 3000;



//RUTAS
app.get("/", (req, res) => {
    res.send("Hello world!")
});



//INICIO DEL SERVIDOR
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});
