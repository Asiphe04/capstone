// Importing modules and instantiating express app
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// Importing routes
const router = require("./routes/router");

// Setting port based on environment variables
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// App settings & middleware
app.set("PORT", process.env.PORT || 3000);
app.use(express.json(), cors());

// Allowing frontend access to backend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Method", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
 res.setHeader("Access-Control-Allow-Origin", "https://capstone-18568.web.app/");
//https://capstone-18568.web.app/
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root Route
app.get("/", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "./static/html/index.html"));
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
