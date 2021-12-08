const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  //console.log(req.body);
  const { email, password } = req.body;

  try {
    //if the same use exist Mongo will catch it and throw an error
    const user = new User({ email, password });
    await user.save();
    //get JWT
    const token = jwt.sign({ userId: user._id }, "wheres_Ronald0s_Key");
    res.send({ token: token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
