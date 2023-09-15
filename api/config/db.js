require("dotenv").config();

const { createPool } = require("mysql2");

const connection = createPool({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPwd,
  port: process.env.dbPort,
  database: process.env.dbName,

});

module.exports = connection;
