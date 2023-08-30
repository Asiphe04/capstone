// Import functions from product model
const {
  getProducts,
  getProductByID,
  insertProduct,
  deleteProductByID,
  updateProductByID,
} = require("../models/productModels");

// Get all products
const showProducts = (req, res) => {
  getProducts((err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
};

// Get single product
const showProductByID = (req, res) => {
  getProductByID(req.params.id, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else if (!results) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(results);
    }
  });
};

// Create new product
const createProduct = (req, res) => {
  const data = req.body;
  insertProduct(data, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(201).json(results); // 201 status for successful resource creation
    }
  });
};

// Delete a product
const deleteProduct = (req, res) => {
  const id = req.params.id;
  deleteProductByID(id, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(204).send(); // 204 status for successful deletion with no response body
    }
  });
};

// Update a product
const updateProduct = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  updateProductByID(id, data, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = {
  showProducts,
  showProductByID,
  createProduct,
  deleteProduct,
  updateProduct,
};
