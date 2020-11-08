const db = require("mongoose");

require("dotenv").config();

const conn = db.createConnection(
  process.env.DB_CONN,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => console.log("Connected to MongoDB")
);

module.exports = conn;
