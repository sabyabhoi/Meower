const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
//const db = require("./database");
const middlewares = require("./middlewares");

require("dotenv").config();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/mews", routes);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello there" });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
