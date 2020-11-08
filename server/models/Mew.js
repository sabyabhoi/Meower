const db = require("mongoose");
const conn = require("../database");

const MewSchema = db.Schema({
  name: {
    type: String,
    required: true,
  },
  mew: {
    type: String,
    required: true,
  },
  createdOn: Date,
});

module.exports = conn.model("Mew", MewSchema);
