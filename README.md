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

## Client:
>### Paso 1: 
Abre una nueva terminal en la raíz del proyecto (fuera de la carpeta server) y crea la aplicación de React utilizando Vite. Cuando te lo pida, selecciona React y JavaScript:
```bash
npm create vite@latest client
```

>### Paso 2:
Dirigete a la nueva carpeta del cliente:
```bash
cd client
```

>### Paso 3:
Instala las dependencias base del proyecto:
```bash
npm install
```

>### Paso 4:
Instala axios, que será la herramienta utilizada para realizar las peticiones HTTP desde el frontend hacia nuestro servidor backend:
```bash
npm i axios
```

>### Paso 5: 
Confirmamos que la estructura principal de la carpeta quede organizada de la siguiente manera, manteniendo los archivos de configuración y diseños base de Vite listos para nuestra primera prueba:
```text
client/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json     
└── vite.config.js
```
>### Paso 6: 
Levanta el entorno de desarrollo del frontend para confirmar que la aplicación base de Vite se ejecuta correctamente:
```bash
npm run dev
```