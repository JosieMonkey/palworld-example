import express from "express";
import { PALDECKS } from "./mock-data";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Paldeck!");
});

app.get("/pals", (req, res) => {
  res.json(PALDECKS);
});

app.get("/randomPal", (req, res) => {
  var randomIndex = Math.floor(Math.random() * PALDECKS.length);
  var randomElement = PALDECKS[randomIndex];
  res.send(randomElement);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
