const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  coords: {
    accuracy: Number,
    altitude: Number,
    altitudeAccuracy: Number,
    heading: Number,
    latitude: Number,
    longitude: Number,
    speed: Number,
  },
  timestamp: Number,
});

const runSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
  },
  totalMiles: {
    type: Number,
  },
  totalMinutes: {
    type: Number,
  },
  locations: [pointSchema],
  charity: {
    type: String,
    require: true,
  },
});

mongoose.model("Run", runSchema);
