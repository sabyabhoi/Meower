const express = require("express");
const Filter = require("bad-words");

const Mew = require("./models/Mew");

const router = express.Router();
const filter = new Filter();

router.get("/", async (req, res) => {
  const mews = await Mew.find();
  res.send(mews);
});

router.post("/", async (req, res) => {
  const mew = new Mew({
    name: req.body.name.toString(),
    mew: filter.clean(req.body.mew.toString()),
    createdOn: Date.now(),
  });
  try {
    const response = await mew.save();
    res.json(response);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
