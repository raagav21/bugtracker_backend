const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.json({
    success: true,
    message: "Register route working"
  });
});

router.post("/login", (req, res) => {
  res.json({
    success: true,
    message: "Login route working"
  });
});

router.get("/me", (req, res) => {
  res.json({
    success: true,
    message: "Me route working"
  });
});

module.exports = router;