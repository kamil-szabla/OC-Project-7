const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
  db.Post.findAll().then((groupomania_db) => res.send(groupomania_db));
});

module.exports = router;

module.exports = () => {
  const posts = require("../controllers/post.controller.js");

  var router = require("express").Router();

  // Create a new Post
  router.post("/", posts.create);

  // Retrieve all Posts
  router.get("/", posts.findAll);

  // Retrieve all published Posts
  router.get("/published", posts.findAllPublished);

  // Retrieve a single Post with id
  router.get("/:id", posts.findOne);

  // Update a Post with id
  router.put("/:id", posts.update);

  // Delete a Post with id
  router.delete("/:id", posts.delete);

  // Delete all Posts
  router.delete("/", posts.deleteAll);

  // app.use("/api/posts", router);
};
