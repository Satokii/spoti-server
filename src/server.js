const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const userRouter = require("./routers/user.js")
const tracksRouter = require("./routers/tracks.js")

app.use(userRouter)

module.exports = app
