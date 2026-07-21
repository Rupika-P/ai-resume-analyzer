const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const { analyzeResume } = require("../controllers/resumeController");

router.post("/analyze", upload.single("resume"), analyzeResume);

module.exports = router;
router.get("/analyze", (req, res) => {
  res.send("Resume route is working!");
});