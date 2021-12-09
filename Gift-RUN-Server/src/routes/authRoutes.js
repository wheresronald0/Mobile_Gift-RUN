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

// signin route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide an email and password, please" });
  }

  const user = await User.findOne({ email: email });
  if (!user) {
    return res
      .status(404)
      .send({ error: "We're sorry, but we don't have record of you" });
  }

  //after the email match, I've got back the "user"/hashed and salted password that needs to be compared
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "wheres_Ronald0s_Key");
    res.send({ token: token });
  } catch (err) {
    return res.status(401).send({ error: "Email or password is invalid " });
  }
});

module.exports = router;
