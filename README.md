# GYMTRACKER - Sistema de Gestion de Entrenamiento

Aplicacion web integral diseñada para el seguimiento y gestión de actividades físicas y entrenamiento personal.

## Estructura del proyecto
```text
GYMTRACKER/
├── client/     # Frontend (React + Vite)
├── server/     # Backend (Node.js + Express)
└── README.md   # Documentación principal
```

## Tecnologias utilizadas (Stack PERN)
* **PostgreSQL**: Base de datos relacional para el almacenamiento persistente.
* **Express**: Framework para la gestion de rutas y logica del servidor.
* **React**: Biblioteca de UI para una interfaz dinamica y moderna.
* **Node.js**: Entorno de ejecucion para el servidor. 

## Ejecucion de proyecto
Sigue las siguientes indicaciones para una correcta instalacion de herramientas.

## Server:

>### Paso 1: 
Comenzaras dirigiendote a la carpeta /server
```text
cd server
```
>### Paso 2:
Iniciaremos el proyecto con npm
```text
npm init -y
```
>### Paso 3:
Instalamos dependencias
```text
npm i express nodemon pg cors
```
>### Paso 4:
Modificamos scripts de package.json 
```json
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
```
>### Paso 5:
Modificamos type de package.json para poder exportar e importar
```json
  "type": "module"
```
>### Paso 6:
Confirmamos que quede estructurado tal que asi: 
```text
server/
├──node_modules/     
├──package.json     
└──package-lock.json   
```
>### Paso 7: 
En la misma carpeta server procedemos a crear index.js 
el cual estara encargado de: Importacion de modulos esenciales, iniciar la aplicacion, configurar los middlewares, vincular rutas y levantar el servidor
```text
server/
├──node_modules/     
├──package.json     
├──package-lock.json
└──index.js
```
```js
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
```
