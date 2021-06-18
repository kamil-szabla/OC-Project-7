const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
let pool = require("../dbConfig");
const postCtrl = require("../controllers/posts");

router.post("/addPost", auth, multer, postCtrl.addPost);
router.get("/getPosts", postCtrl.getAllPosts);
router.get("/singlePost/:id", postCtrl.getSinglePost);
router.get("/postComments/:id", postCtrl.getComments);
router.post("/commentPost", postCtrl.commentPost);

// mark as reed
router.post('/seen', async (req, res) => {
  let sql =
    'INSERT INTO seen (postId, userId) VALUES ("' +
    req.body.postId +
    '", "' +
    req.body.userId +
    '")';
  
  pool.query(sql, function(err, result, fields) {
    if(err) {
      return res.json(err)
    } else {
      res.status(201).json()
    }
  })
});

// show visited posts
router.post("/visited", (req, res, next) => {
  let userID = req.body.userId;
  let sql = "SELECT DISTINCT postId FROM seen WHERE userId = " + userID;
  pool.query(sql, function(err, result, fields) {
    if (err) {
      return res.json(err);
    }
    res.json(result);
  });
});

module.exports = router;
