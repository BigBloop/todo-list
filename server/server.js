const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// connect to MongoDB Atlas DB
// const connectMongoDB = async () => {
//   try {
//     const connection = await mongoose.connect(process.env.MONGODB_URI);

//     console.log(
//       `Successfully Connected to MongoDB Atlas Database: ${connection.connection.host}`
//     );
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// connectMongoDB();

// use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(errorHandler);

// configure routers
const todoRouter = require("./routers/todoRouter");

app.use("/api/todo", todoRouter);

// Run server
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});