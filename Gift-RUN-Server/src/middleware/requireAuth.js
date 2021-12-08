const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "You have to log in" });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "wheres_Ronald0s_Key", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "Your authentication failed" });
    }
    const { userId } = payload; //payload is what was stuck in the JWT, i.e. {userId: user._id}

    const user = await User.findById(userId); //tells mongo to go look for the id in the db
    req.user = user; //giving other routes access to the req data
    next(); //call next in the chain of middleware or default to root request
  });
};
