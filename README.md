# GYMTRACKER - Sistema de Gestion de Entrenamiento

Aplicacion web integral diseñada para el seguimiento y gestión de actividades físicas y entrenamiento personal.

## Estructura del proyecto
```text
GYMTRACKER/
├── client/     # Frontend (React + Vite)
├── server/     # Backend (Node.js + Express)
└── README.md   # Documentación principal
```
## Tecnologías utilizadas (Stack PERN)
* **PostgreSQL**: Base de datos relacional para el almacenamiento persistente.
* **Express**: Framework para la gestion de rutas y logica del servidor.
* **React**: Biblioteca de UI para una interfaz dinamica y moderna.
* **Node.js**: Entorno de ejecucion para el servidor. 

## Ejecución del proyecto
Sigue las siguientes indicaciones para una correcta instalacion de herramientas.

## Server:

>### Paso 1: 
Comenzaras clonando el proyecto hacia tu directorio
```bash
git clone https://github.com/tobalpintoo/GymTracker.git
```
>### Paso 2:
Abriremos la carpeta server (backend)
```bash
cd GymTracker/server
```
>### Paso 3:
Instalamos dependencias
```bash
npm install
```
>### Paso 4:
Levantamos el servidor
```bash
npm run dev
```
>### Paso 5: 
index.js estara encargado de: Importacion de modulos esenciales, iniciar la aplicacion, configurar los middlewares, vincular rutas y levantar el servidor

```js
    // IMPORTACIONES
    import express from "express";


    // INICIALIZACIÓN
    const app = express();
    const PORT = 3000;


    // RUTAS
    app.get("/", (req, res) => {
        res.send("Hello world!")
    });


    // INICIO DEL SERVIDOR
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    });
```
## Endpoint de prueba:
Para comprobar que el servidor está corriendo correctamente, puedes realizar una prueba sencilla:
* **Backend Base URL: http://localhost:3000**
* **Endpoint de prueba: GET /**
* **Respuesta esperada: "Hello world!"**
Puedes probarlo abriendo la URL anterior en tu navegador o utilizando extensiones como **Thunder Client** (en VS Code) o **Postman**.
  
## Client:
>### Paso 1: 
Abriremos la carpeta client (frontend)
```bash
cd GymTracker/client
```

>### Paso 2:
Instala las dependencias base del proyecto:
```bash
npm install
```

>### Paso 3:
Levanta el entorno de desarrollo del frontend para confirmar que la aplicación base de Vite se ejecuta correctamente:
```bash
npm run dev
```