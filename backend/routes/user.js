const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

// router.post("/addPost", auth, userCtrl.addPost);

router.get("/profile/:id",  auth, userCtrl.getUserDetails);

router.delete("/deleteProfile/:id", auth, userCtrl.deleteProfile);

module.exports = router;
