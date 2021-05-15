const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')

const postCtrl = require("../controllers/posts");

router.post("/addPost", auth, postCtrl.addPost);

module.exports = router;
