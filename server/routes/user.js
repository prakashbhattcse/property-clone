// routes/user.js
const express = require("express");
const {
  registerUser,
  loginUser,
  checkLoginStatus,
} = require("../controller/user");
const router = express.Router();

router.post("/signup", (req, res, next) => {
  console.log("Signup route hit in user.js");
  console.log("Request body:", req.body);
  registerUser(req, res, next); // This will handle the user registration
});

router.post("/login", loginUser);
router.get("/check", checkLoginStatus);
router.post("/logout", (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
