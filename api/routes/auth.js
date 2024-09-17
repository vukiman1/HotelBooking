import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello from the API Auth!");
});
router.get("/register", (req, res) => {
  res.send("Hello from the API Register!");
});

export default router;
