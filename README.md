# GYMTRACKER - Sistema de Gestión de Entrenamiento

Aplicación web integral diseñada para el seguimiento y la gestión de actividades físicas y entrenamiento personal.

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
Abriremos la carpeta del proyecto junto al server (backend)
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
El archivo server/index.js se encarga de inicializar Express, definir las rutas base y levantar el servidor en el puerto configurado.

## 1. Nombre de la Base de Datos
* **Nombre:** `gymtracker`

## 2. Cómo configurar la base de datos
Para configurar la base de datos del proyecto, primero debes crear una base de datos llamada 'gymtracker':

### Opcion A: Usando terminal
desde la raiz del proyecto ejecuta: 

```bash
createdb gymtracker
```

Luego ejecuta el archivo de estructura de la base de datos:

```bash
psql -d gymtracker -f server/database/schema.sql
```

Finalmente, carga los datos de prueba:

```bash
psql -d gymtracker -f server/database/seed.sql
```

### Opcion B: usando pgAdmin o DBeaver

1. **Crea manualmente la base de datos llamada gymtracker**
2. **Abre el archivo server/database/schema.sql y ejecútalo sobre la base de datos gymtracker.**
3. **Abre el archivo server/database/seed.sql y ejecútalo sobre la misma base de datos.**
  
## 3. ¿Qué representa la tabla `exercises`?
La tabla `exercises` permite registrar los movimientos físicos dentro de la plataforma de entrenamiento. Su estructura permite organizar las rutinas de manera eficiente:

* **id:** Clave primaria única que identifica cada registro.
* **name:** Nombre del ejercicio (debe ser único).
* **muscle_group:** Clasificación del grupo muscular enfocado (ej. Pecho, Espalda, Piernas).
* **description:** Breve descripción técnica de la ejecución.
* **created_at:** Timestamp que registra automáticamente la fecha y hora de creación de cada ejercicio.

## Endpoint de prueba:
Para comprobar que el servidor está corriendo correctamente, puedes realizar una prueba sencilla:
* **Backend Base URL: http://localhost:3000**
* **Endpoint de prueba: GET /**
* **Respuesta esperada: "Hello world!"**
Puedes probarlo abriendo la URL anterior en tu navegador o utilizando extensiones como **Thunder Client** (en VS Code) o **Postman**.
  
## Client:
>### Paso 1: 
Abre una nueva terminal desde la raíz del proyecto y entra a la carpeta del frontend:

```bash
cd client
```

>### Paso 2:
Instala las dependencias:
```bash
npm install
```

>### Paso 3:
Levanta el entorno de desarrollo:
```bash
npm run dev
```

Por defecto, Vite mostrará en la terminal la URL local donde se está ejecutando la aplicación.