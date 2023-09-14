const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { createToken } = require("../middleware/AuthenticateUser");

const {
  getUsers,
  getUserByID,
  insertUser,
  updateUserByID,
  deleteUserByID,
  loginUserByPass,
checkEmailExists 
} = require("../models/userModels");

// Get all users
const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
};

// Get single user
const showUserByID = (req, res) => {
  getUserByID(req.params.id, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else if (!results) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(results);
    }
  });
};

// Create new user
const createUser = (req, res) => {
  const data = req.body;
  // Check if userPass and emailAdd are provided in the request body
  if (!data.userPass || !data.emailAdd) {
    return res.status(400).json({ error: "Both email and password are required." });
  }

  // Check if the email already exists in the database
  checkEmailExists(data.emailAdd, (err, emailExists) => {
    if (err) {
      return res.status(500).json({ error: "An error occurred while checking the email." });
    }

    if (emailExists) {
      return res.status(409).json({ error: "Email address already exists." });
    }

    // Hash the password
    data.userPass = bcrypt.hashSync(data.userPass, 10);
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };

    let token = createToken(user);

    // Insert the user into the database
    insertUser(data, (err, results) => {
      if (err) {
        return res.status(500).json({ error: "An error occurred while creating the user." });
      } else {
        return res.status(201).json({ token, results });
      }
    });
  });
};
// const createUser = (req, res) => {
//   const data = req.body;
//   // Check if userPass is provided in the request body
//   if (!data.userPass) {
//     return res.status(400).json({ error: "Password is required." });
//   }
//   // Hash the password
//   data.userPass = bcrypt.hashSync(data.userPass, 10);
//   const user = {
//     emailAdd: data.emailAdd,
//     userPass: data.userPass,
//   };
//   let token = createToken(user);
//   insertUser(data, (err, results) => {
//     if (err) {
//       res
//         .status(500)
//         .json({ error: "An error occurred while creating the user." });
//     } else {
//       res.status(201).json({ token, results });
//     }
//   });
// };

// Delete a user
const deleteUser = (req, res) => {
  const id = req.params.id;
  deleteUserByID(id, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(204).send();
    }
  });
};

// Update a user
const updateUser = (req, res) => {
  const id = req.params.id;
  const data = req.body;
   data.userPass = bcrypt.hashSync(data.userPass, 10);
  updateUserByID(id, data, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(results);
    }
  });
};


module.exports = {
  showUsers,
  showUserByID,
  createUser,
  deleteUser,
  updateUser,


};
