require("dotenv").config();
const express = require("express");
const cors = require("cors");
const queryWithPromise = require("./db.js");
const service = require("./service.js");
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

const sqlGetAllPosts = "SELECT * FROM posts";

app.get("/api/posts", async (req, res) => {
  let posts = await queryWithPromise(sqlGetAllPosts);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(posts);
});

app.post("/api/posts", async (req, res) => {
  if (req.body.title) {
    let timestamp = Math.round(new Date().getTime() / 1000);
    const sqlInsert = `INSERT INTO posts ( title, url, timestamp) VALUES ( '${req.body.title}', '${req.body.url}', '${timestamp}' )`;
    let OkPacket = await queryWithPromise(sqlInsert);

    let response = service.postService(req.body, OkPacket);
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
  } else {
    res.statusCode = 400;
    res.end();
  }
});

app.put("/api/posts/:id/:vote", async (req, res) => {
  let vote = req.params.vote;
  let id = req.params.id;
  const sqlSelectById = `select * from posts  where id=${id}`;
  if (vote === "downvote") {
    const sqlDownvote = `UPDATE posts SET score=score-1 WHERE id=${id}`;
    await queryWithPromise(sqlDownvote);
  } else if (vote === "upvote") {
    const sqlUpvote = `UPDATE posts SET score=score+1 WHERE id=${id}`;
    await queryWithPromise(sqlUpvote);
  }
  let response = await queryWithPromise(sqlSelectById);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(response[0]));
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
