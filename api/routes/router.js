const express = require("express");
const router = express.Router();
const {
  createCart,
  deleteAllCartItems,
  deleteCart,
  showCart,
  updateCart,
} = require("../controllers/orders");
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
// Add this route for checking email existence
router.get("/users/check-email", (req, res) => {
  const email = req.query.email; // Get the email from the query parameter

  // Call the checkEmailExists function from your controller
  checkEmailExists(email, (err, exists) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json({ exists });
    }
  });
});

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

//orders
router.get("/users/:id/cart", showCart);

router.post("/users/:id/cart", createCart);

router.delete("/users/:id/cart", deleteAllCartItems);

router.delete("/users/:id/cart/:id", deleteCart);

router.put("/users/:id/cart/:id", updateCart);

// export default router
module.exports = router;
