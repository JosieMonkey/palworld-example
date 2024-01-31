import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Paldeck!");
});

app.get("/pals", (req, res) => {
  res.json([{ name: "pal1" }, { name: "pal2" }, { name: "pal3" }]);
});

app.get("/randomPal", (req, res) => {
  res.send("Random Pal");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
