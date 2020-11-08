const express = require("express");
const Mew = require("./models/Mew");

const router = express.Router();

router.get("/", async (req, res) => {
  const mews = await Mew.find();
  res.send(mews);
});

router.post("/", async (req, res) => {
  const mew = new Mew(req.body);
  try {
    const response = await mew.save();
    res.json(response);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
