const express = require("express");
const Entry = require("../models/entry.js")

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const newEntry = new Entry(req.body);
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const Entry = await Entry.find({ userId: new mongoose.Types.ObjectId(req.params.userId) });
    res.status(200).json(Entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;




