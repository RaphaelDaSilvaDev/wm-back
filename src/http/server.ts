import express from "express";

const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("HEHEHE");
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
