import mongoose from "mongoose";

// Creating a global variable not to connect to the database again if the connection is already live (the global mongoose object is not null or undefined)
const cashedConnection = (global as any).mongoose || {
  connect: null,
  promise: null,
};

// Function to connect to the MongoDB database using Mongoose
export const dbConnect = async () => {
  const mongoURI = process.env.MONGO_URI ? process.env.MONGO_URI : "";

  // If connection is live return the current connection
  // To ensure that we do not create multiple connections in a serverless environment
  if (cashedConnection.connect) return cashedConnection;

  if (!cashedConnection.promise) {
    cashedConnection.promise = mongoose
      .connect(mongoURI, { bufferCommands: false })
      .then((mongoose) => {
        console.log("Connected to the database.");
        return mongoose;
      })
      .catch((err) => {
        err.message = "Failed to connect to the database.";
        err.status = 500;
        console.log(err.status, err.message);
        throw err;
      });
  }

  cashedConnection.connect = await cashedConnection.promise;
  (global as any).mongoose = cashedConnection;
  return cashedConnection.connect;
};
