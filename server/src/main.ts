// Load environment variables from .env file
import "dotenv/config";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

dotenv.config();

// Import the Express application from ./app
import app from "./app";
const PORT = process.env.PORT || 3000;
// Middleware global
app.use(cors());
app.use(express.json());

// Get the port from the environment variables
const port = process.env.APP_PORT;

app.use("/api", router);

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
