# Digital Bookshelf API

A RESTful API built with **Node.js, Express, MongoDB, and Mongoose** for managing a collection of books.

## Features

* Create a new book
* Get all books
* Get a single book by ID
* Update a book
* Delete a book
* MongoDB database integration
* Environment variables for database configuration
* Error handling with `try...catch`

## Technologies

* Node.js
* Express
* MongoDB
* Mongoose
* dotenv
* Nodemon

## Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd digital-bookshelf-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the root directory:

```text
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

### 4. Start the server

For development:

```bash
npm run dev
```

Or:

```bash
node server.js
```

The server runs at:

```text
http://localhost:3000
```

## API Endpoints

### Create a Book

```text
POST /books
```

Example request body:

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "isbn": "9780062315007",
  "publishDate": "1988-01-01",
  "inStock": true
}
```

### Get All Books

```text
GET /books
```

Returns all books in the database.

### Get One Book

```text
GET /books/:id
```

Example:

```text
GET /books/64abc123...
```

### Update a Book

```text
PUT /books/:id
```

Example request body:

```json
{
  "title": "The Alchemist - Updated",
  "inStock": false
}
```

### Delete a Book

```text
DELETE /books/:id
```

Example:

```text
DELETE /books/64abc123...
```

## Project Structure

```text
digital-bookshelf-api/
│
├── db/
│   └── connection.js
│
├── models/
│   └── Book.js
│
├── routes/
│   └── bookRoutes.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Environment Variables

The application requires:

| Variable    | Description               |
| ----------- | ------------------------- |
| `MONGO_URI` | MongoDB connection string |

**Important:** Never commit your `.env` file or MongoDB credentials to GitHub.

Make sure `.gitignore` contains:

```text
node_modules/
.env
```

## Testing

The API can be tested using **Postman**.

Recommended CRUD testing order:

1. `POST /books` — Create a book
2. `GET /books` — View all books
3. `GET /books/:id` — View one book
4. `PUT /books/:id` — Update a book
5. `DELETE /books/:id` — Delete a book
