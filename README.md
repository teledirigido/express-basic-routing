# Express Basic Routing

A simple Express.js REST API for learning about routing, HTTP methods, and API development. This project demonstrates basic CRUD operations on a user management system.

## Features

- **GET** `/users` - List all users or filter by role using query parameters
- **GET** `/users/:id` - Get a specific user by ID
- **PUT** `/users/:id` - Update a user's role
- Request logging with Morgan middleware

## Installation

```bash
npm install
```

## Running the Server

```bash
node app.js
```

The server will start on http://localhost:3001

## API Examples

### Get all users
```bash
curl http://localhost:3001/users
```

### Filter users by role
```bash
curl http://localhost:3001/users?role=admin
```

### Get a specific user
```bash
curl http://localhost:3001/users/1
```

### Update user role
```bash
curl -X PUT http://localhost:3001/users/2 \
  -H "Content-Type: application/json" \
  -d '{"role":"user"}'
```

## Technologies

- Express.js 5.x
- Morgan (HTTP request logger)
- ES Modules

## Learning Topics

This example covers:
- Express routing (GET, PUT)
- Route parameters (`:id`)
- Query parameters (`?role=admin`)
- JSON request/response handling
- Middleware usage
- Basic error handling
