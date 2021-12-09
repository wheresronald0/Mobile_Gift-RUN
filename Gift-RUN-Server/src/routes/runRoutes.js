const e = require("express");
const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middleware/requireAuth");

const Run = mongoose.model("Run");

const router = express.Router();
router.use(requireAuth);

router.get("/runs", async (req, res) => {
  const runs = await Run.find({ userId: req.user._id });

  res.send(runs);
});

module.exports = router;
