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

app.get("/book-reviews", async (req, res) => {
  const result = await db.query("SELECT * FROM book_reviews ORDER BY id DESC");

  res.json(result.rows);
});

app.post("/book-reviews", async (req, res) => {
  const body = req.body;
  const usernameFromClient = req.body.username;
  const commentFromClient = req.body.comment;
  const ratingFromClient = req.body.rating;

  const data = await db.query(
    `INSERT INTO book_reviews (username, comment, rating) VALUES ($1, $2, $3)`,
    [usernameFromClient, commentFromClient, ratingFromClient]
  );

  res.json({ status: `Review inserted into database` });
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
