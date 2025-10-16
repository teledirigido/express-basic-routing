# Ejemplo Educativo de Rutas en Express

Una API REST simple en Express.js para aprender sobre enrutamiento, métodos HTTP y desarrollo de APIs. Este proyecto demuestra operaciones CRUD básicas en un sistema de gestión de usuarios.

## Características

- **GET** `/users` - Lista todos los usuarios o filtrar por rol usando parámetros de consulta
- **GET** `/users/:id` - Obtiene un usuario específico por ID
- **PUT** `/users/:id` - Actualiza el rol de un usuario
- Registro de peticiones con middleware Morgan

## Instalación

```bash
npm install
```

## Ejecutar el Servidor

```bash
node app.js
```

El servidor se iniciará en http://localhost:3001

## Ejemplos de API

### Obtener todos los usuarios
```bash
curl http://localhost:3001/users
```

### Filtrar usuarios por rol
```bash
curl http://localhost:3001/users?role=admin
```

### Obtener un usuario específico
```bash
curl http://localhost:3001/users/1
```

### Actualizar el rol de un usuario
```bash
curl -X PUT http://localhost:3001/users/2 \
  -H "Content-Type: application/json" \
  -d '{"role":"user"}'
```