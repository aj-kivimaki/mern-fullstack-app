import express from "express";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";
import { PORT, mongoDbURL } from "./config.js";

// const mongoDbURL = `mongodb+srv://${process.env.KEY}@cluster0.mtefec1.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to backend");
});

app.use("/books", bookRoutes);

mongoose
  .connect(mongoDbURL)
  .then(() => {
    console.log("App connected to the MongoDB database");
    app.listen(PORT, () => console.log(`App is listening to port: ${PORT}`));
  })
  .catch((err) => console.log(err));
