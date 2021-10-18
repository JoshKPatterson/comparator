import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import fs from "fs";
import config from "./config";
import path from "path";

import itemRoutes from "./routes/api/items";
import statRoutes from "./routes/api/stats";
import dataRoutes from "./routes/api/data";

const { MONGO_URI, MONGO_DB_NAME } = config;

// New Express Instance
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

// Use Routes
// app.use('/api/data', itemRoutes);
// app.use('/api/data', statRoutes);
app.use("/api/data", dataRoutes);

// Serve Static Assets If In Production
if (process.env.NODE_ENV === "production") {
  // Set Static Folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// const file = fs.readFileSync('./data.json')
// const fileJson = JSON.parse(file);

export default app;
