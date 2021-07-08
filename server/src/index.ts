import dotenv from "dotenv";
dotenv.config();

import express from "express";
import apiRouter from "./routes/api";
import path from "path";

const pathToClient = "../../client/build";
const port =
  process.env.PORT || (process.env.NODE_ENV === "production" ? 80 : 5000);

const server = express();
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use(express.static(path.resolve(__dirname, pathToClient)));
server.use("/api", apiRouter);

server.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, pathToClient, "index.html"));
});

server.listen(port, () => {
  console.log(`Server started at ${port}`);
});
