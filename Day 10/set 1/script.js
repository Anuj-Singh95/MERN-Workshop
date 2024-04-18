const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.send({ status: "fail", message: "work in progress" });
});
app.post("/api/users", (req, res) => {
  res.send({ status: "fail", message: "work in progress" });
});
app.put("/api/users", (req, res) => {
  res.send({ status: "fail", message: "work in progress" });
});
app.delete("/api/users", (req, res) => {
  res.send({ status: "fail", message: "work in progress" });
});

app.listen(4000, (err) => {
  console.log("server is running ");
});
