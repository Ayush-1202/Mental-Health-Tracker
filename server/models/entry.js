const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  mood: {
    type: String,
    enum: ["happy", "sad", "neutral", "angry", "anxious", "excited", "tired"], // optional: restrict values
    required: true
  },
  stress: {
    type: Number,
    min: 1,
    max: 10
  },
  sleep: {
    type: Number, // hours of sleep
    min: 0,
    max: 24
  },
  happiness: {
    type: Number,
    min: 1,
    max: 10
  },
  anxiety: {
    type: Number,
    min: 1,
    max: 10
  },
  note: {
    type: String,
    maxlength: 500
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Entry", entrySchema);
