Notes API (RESTful CRUD + JWT Authentication)

A RESTful API built with Node.js, Express, and MongoDB that performs CRUD operations for managing notes. This version includes JWT-based authentication and protected routes.

Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- bcryptjs
- jsonwebtoken

Features

Notes API

- Create a Note
- Get all Notes
- Get a single Note by ID
- Update a Note
- Delete a Note
- Proper HTTP Status Codes
- Error Handling

Authentication System

- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Token Generation
- Protected routes using Middleware

Installation

1. git clone https://github.com/johnreeeyy/notes-api.git
2. cd notes-api
3. npm install

Create a .env file containing

- MONGO_URI=your_mongodb_connection_string
- PORT=5001
- JWT_SECRET=your_secret_key

Then start the server using "npm run dev"

Authentication API Endpoints

- Register - POST /api/auth/register
- Login - POST /api/auth/login

Sample Request Body (JSON)

- Register

```json
{
  "username": "your_username",
  "email": "your_email@gmail.com",
  "password": "your_password"
}
```

- Login

```json
{
  "email": "your_email@gmail.com",
  "password": "your_password"
}
```

- Successful Login returns:

```json
{
  "token": "your_jwt_token"
}
```

Protected Routes

- All Notes routes require a valid JWT Token
- Include this in request headers: Authorization: Bearer <your_token>

Notes API Endpoints

- Create Note - POST /api/notes
- Get All Notes - GET /api/notes
- Get Single Note - GET /api/notes/:id
- Update Note - PUT /api/notes/:id
- Delete Note - DELETE /api/notes/:id

AUTHOR

- John Rey P. Francisco | Aspiring Backend Developer (Node.js / Express)
