const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Nguyen Van A" },
    { id: 2, name: "Le Thi B" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
