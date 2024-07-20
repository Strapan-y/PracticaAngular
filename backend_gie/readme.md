# API Documentation

## Endpoints

### Get All Books

- **URL:** `/libros`
- **Method:** GET
- **Description:** Retrieves all books from the server.
- **Response:** JSON array containing the list of books.

### Add a New Book

- **URL:** `/libros`
- **Method:** POST
- **Description:** Adds a new book to the server.
- **Request Body:** JSON object representing the new book.
- **Response:** JSON object containing the added book.

### Delete a Book by ID

- **URL:** `/libros/:id`
- **Method:** DELETE
- **Description:** Deletes a book from the server by its ID.
- **Parameters:** `id` - ID of the book to be deleted.
- **Response:** JSON object confirming the deletion.

## Host

To use this API, make requests to `http://localhost:3000`.
