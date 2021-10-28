const express = require("express");
const cors = require("cors");
const duckRouter = require("./routes/duck");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/ducks", duckRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Duck collector listening at http://localhost:${port}`);
});
