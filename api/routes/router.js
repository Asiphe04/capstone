const express = require("express");
const router = express.Router();
// import functions from controller
const {
  showProducts,
  showProductByID,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products");

//get all products
router.get("/products", showProducts);

//get single product
router.get("/products/:id", showProductByID);

//create a new product
router.post("/products", createProduct);

// Delete a product
router.delete("/products/:id", deleteProduct);

// Update a product
router.put("/products/:id", updateProduct);

const {
  showUsers,
  showUserByID,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/users");

const { userLogin } = require("../models/userModels");

//users
//get all users
router.get("/users", showUsers);

//get single user
router.get("/users/:id", showUserByID);

//create a new user
router.post("/users", createUser);

//login a user
router.post("/users/login", userLogin);

// Delete a user
router.delete("/users/:id", deleteUser);

// Update a user
router.put("/users/:id", updateUser);

// export default router
module.exports = router;
