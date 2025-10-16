# Ejemplo Práctico: API de Usuarios

El siguiente ejemplo práctico es una API REST simple en Express.js para aprender sobre enrutamiento, métodos HTTP y desarrollo de APIs. 

Este proyecto demuestra operaciones CRUD básicas en un sistema de gestión de usuarios.

## Características

- **GET** `/users` - Lista todos los usuarios o filtrar por rol usando parámetros de consulta
- **GET** `/users/:id` - Obtiene un usuario específico por ID
- **PUT** `/users/:id` - Actualiza el rol de un usuario
- Registro de peticiones con middleware Morgan

## Instalación

1. Clonar o Forkear el repositorio
2. Instala las dependencias necesarias

```bash
npm install
```

3. Ejecutar el Servidor

```bash
node app.js
```

El servidor se iniciará en http://localhost:3001