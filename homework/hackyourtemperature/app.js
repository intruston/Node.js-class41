import express from "express";
import postAndFetch from "./server.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend to frontend!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.post("/weather", (req, res) => {
  postAndFetch(req, res);
});

export default app;
