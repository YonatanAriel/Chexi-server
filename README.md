# Chexi Backend

Welcome to the backend of the "chexi" project. This README provides an overview of the project's structure and key components.

## Project Structure

The "chexi" backend is organized into several key directories and components:

- **DL (Data Layer):** This directory contains everything related to data storage and database connectivity.
  - **connect.js:** This file establishes a connection to the MongoDB database.
  - **models:** This folder holds the data models for your application.
  - **controller:** This folder exposes CRUD (Create, Read, Update, Delete) operations for the services.

- **BL (Business Logic):** The BL directory houses the business logic and core functionality of the project.
  - This is where all the logic and functions of your application reside.

- **Routers:** In the Routers directory, you'll find route definitions for various models.
  - For example, "users.route.js," "playlists.route.js," and "songs.route.js" define routes for the respective entities.

- **Root Files:**
  - **auth.js:** This file in the project's root is dedicated to authentication.
  - **index.js:** The main entry point of your backend.
    - It connects to the database, configures the Express server, and defines routes for different models.

## Getting Started

To run the "chexi" backend, follow these steps:

1. **Clone the Repository**
- Make sure you have Node.js installed on your system. 
- open an empty folder in your code editor
- open the teminal and paste (Assuming you are using npm): npm clone https://github.com/YonatanAriel/Chexi-server.git .

3. **Set up Environment:**

- in DL > db.js: replace MONGO_URL with MongoDB connection string you've created.
- in auth.js: replace (all) SECRET with the same random text you want.
- in BL > users.service.js: replace SALT_ROUNDS with the number 9.
- in index.js: replace PORT with the number 5000.
  
  
3. **Install Dependencies:**

- Install the required dependencies by running the following command in your terminal:
npm install

4. **Start the Server:**

- Start the server with the following command:
npm start
### or -
- test the server in the [**Website**](https://chexi.netlify.app/)
   
## Technologies Used

The "chexi" backend leverages the following technologies and libraries:

- **Node.js** A runtime for executing JavaScript code on the server.
- **MongoDB:** A NoSQL database for data storage.
- **Express:** A minimal and flexible Node.js web application framework.
- **Mongoose:** An ODM (Object-Document Mapping) library for MongoDB.
- **Bcrypt:** A library for secure password hashing and verification.
- **CORS:** A middleware for handling Cross-Origin Resource Sharing.
- **Dotenv:** A library for loading environment variables from a .env file.
- **JSON Web Token (JWT):** A compact, URL-safe means of representing claims to be transferred between two parties.

## Note

The project's structure is designed to allow easy database switching. If you decide to switch to another database, you primarily need to replace the models in the DL directory.

Feel free to explore and modify the code to suit your specific needs.
