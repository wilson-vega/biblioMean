const express = require("express");
const mongoose = require("mongoose");

const user = require("./routes/user");

const app = express();
app.use(express.json());
app.use("/api/user", user);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Escuchando puerto: " + port));

mongoose
  .connect("mongodb://localhost/bibliomean", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a Mongo DB"))
  .catch((error) => console.log("No se a conectado a mongo DB"));
