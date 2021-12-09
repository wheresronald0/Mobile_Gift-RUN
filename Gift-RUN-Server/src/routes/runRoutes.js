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

router.post("/runs", async (req, res) => {
  const { name, date, totalMiles, totalMinutes, locations, charity } = req.body;

  if (!totalMiles || !charity) {
    return res.status(422).send({
      error: "Please provide # of miles you ran and the charity you chose",
    });
  }

  try {
    const run = new Run({
      name: name,
      date: date,
      totalMiles: totalMiles,
      totalMinutes: totalMinutes,
      locations: locations,
      userId: req.user._id,
    });
    await run.save();
    res.send(run);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
