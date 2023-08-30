require("dotenv").config();

const { createPool } = require("mysql2");
// Create connection variable
const connection = createPool({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPwd,
  port: process.env.dbPort,
  database: process.env.dbName,
  multipleStatements: true,
  connectionLimit: 30,
});

module.exports = connection;
