# note-book-backend

front-end-repo -  https://github.com/omal-harsha/note-book-frontend

This repository contains the backend code for a notebook application developed using Node.js and Express.js. The backend is responsible for handling requests from the frontend, managing user data, and interacting with the MongoDB database using MongoDB Compass and MongoDB Atlas.

## Technology Stack:
+ Node.js: The backend is built using Node.js, which is a fast and scalable server-side JavaScript runtime.
+ Express.js: Express.js is used to create the API endpoints and manage routing for the application.

## NPM Packages:
+ bcrypt: Used for hashing user passwords securely before storing them in the database.
+ body-parser: Middleware for parsing incoming request bodies in a readable format.
+ cookie-parser: Middleware for parsing cookies attached to incoming requests.
+ cors: Enabling Cross-Origin Resource Sharing for handling requests from the frontend.
+ dotenv: Used to securely store sensitive environment variables, such as the database connection string.
+ jsonwebtoken: JSON Web Tokens (JWT) are used for user authentication and authorization.
+ mongoose: A MongoDB object modeling tool, used for interacting with the MongoDB database.
+ nodemon: Automatically restarts the server when changes are made to the code during development.

## MongoDB Integration:
+ Database: MongoDB is used as the database for storing user data and notes.
+ Database Management: MongoDB Compass is used as a graphical user interface for managing the MongoDB database.
+ Database Hosting: MongoDB Atlas is utilized to host the MongoDB database in the cloud, providing scalability and reliability.

hosted url - https://note-book-backend-umber.vercel.app/ (but it's not connect with frontend)
## sample API
 login API - https://note-book-backend-umber.vercel.app/login   (POST)

```
{
  "username": "nuwan",
  "password": "777"
}
```


