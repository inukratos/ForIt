# Usuarios App

Esta aplicación permite mostrar una lista de usuarios obtenida desde un servicio REST y agregar nuevos usuarios. Los usuarios se almacenan en un archivo `.json` en el backend. La aplicación está dividida en dos partes: el **frontend**, construido con React, y el **backend**, que está hecho con Node.js y Express.

## Estructura del Proyecto

- **Frontend**: React (carpeta `frontend`)
- **Backend**: Node.js (carpeta `backend`)

### Requerimientos Previos

- Tener **Node.js** instalado en tu máquina. Puedes descargarlo desde [aquí](https://nodejs.org/).
- Tener **npm** instalado para gestionar las dependencias. npm normalmente se instala junto con Node.js.

---

## Instalación y Ejecución

### 1. Clonar el repositorio

Primero, clona el repositorio a tu máquina usando el siguiente comando en tu terminal:

```bash
git clone https://github.com/inukratos/ForIt.git
cd ForIt
```

### 2. Instalar dependencias

- **Backend**

Accede a la carpeta backend y instala las dependencias necesarias:

```bash
cd backend
npm install
```
- **Frontend**

Accede a la carpeta frontend y también instala las dependencias:

```bash
cd ../frontend
npm install
```

### 3. Ejecutar el Backend

Una vez que las dependencias del backend estén instaladas, puedes iniciar el servidor de Node.js:

```bash
cd ../backend
npm start
Esto iniciará el servidor en http://localhost:5000.
```

### 4. Ejecutar el Frontend
Luego, accede a la carpeta frontend y ejecuta la aplicación React:

```bash
cd ../frontend
npm start
Esto abrirá la aplicación en http://localhost:3000, donde podrás ver la lista de usuarios y agregar nuevos.
```

---


### Funcionalidades

- **Visualización de usuarios**: La aplicación muestra una lista de usuarios que se obtiene desde el backend.
- **Agregar usuario**: Puedes agregar un nuevo usuario completando un formulario en el frontend. El nuevo usuario se almacena en el archivo .json del backend.

### Estructura de Archivos

- **frontend**: Contiene la aplicación React.
- **src/**: Código fuente de la aplicación React.
- **backend**: Contiene el servidor Node.js con Express.
- **src/users.json**: Archivo donde se almacenan los usuarios.
- **src/server.js**: El servidor Express que maneja las rutas.