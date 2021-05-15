const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
//
router.post("/addPost", userCtrl.addPost);

router.get("/profile/:id", auth, userCtrl.getUserDetails);

module.exports = router;
