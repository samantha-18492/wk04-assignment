import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(cors());

app.use(express.json());

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
  res.status(200).json(`You're looking at my root route!`);
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
