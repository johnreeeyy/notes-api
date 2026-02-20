Notes API (RESTful CRUD)

A simple RESTful API built with Node.js, Express, and MongoDB that performs
CRUD operations for managing notes.

Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

Features

- Create a Note
- Get all Notes
- Get a single Note by ID
- Update a Note
- Delete a Note
- Proper HTTP Status Codes
- Error Handling

Installation

1. git clone https://github.com/johnreeeyy/notes-api.git
2. cd notes-api
3. npm install

Create a .env file containing

MONGO_URI=your_mongodb_connection_string
PORT=5001

Then start the server using "npm run dev"

API Endpoints

Create Note - POST /api/notes
Get All Notes - GET /api/notes
Get Single Note - GET /api/notes/:id
Update Note - PUT /api/notes:id
Delete Note - DELETE /api/notes:id

Sample Request Body (JSON)

{
"title": "My First Note",
"content": "This is a sample note."
}

AUTHOR
John Rey P. Francisco
Aspiring Backend Developer (Node.js/Express)
