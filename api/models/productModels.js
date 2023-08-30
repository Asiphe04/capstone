//Import database connection
const db = require("../config/db");

//Get products
const getProducts = (result) => {
  db.query(
    "SELECT prodID, prodName, quantity, amount , category, prodURL , description FROM products",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
//Get a single product

const getProductByID = (id, result) => {
  const query =
    "SELECT prodID, prodName, quantity, amount , category, prodURL, description FROM products WHERE prodID = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.log("Error executing query:", query);
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//Add a new product
const insertProduct = (data, result) => {
  db.query("INSERT INTO products SET ?;", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update an existing product
const updateProductByID = (id, data, result) => {
  db.query(
    "UPDATE products SET prodName = ?, quantity = ?, amount = ?, category = ?, prodURL = ? , description = ? WHERE prodID = ?",
    [
      data.prodName,
      data.quantity,
      data.amount,
      data.category,
      data.prodURL,
      data.description,
      id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result({ error: "Failed to update product." }, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Delete a product
const deleteProductByID = (id, result) => {
  db.query("DELETE FROM products WHERE prodID = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

module.exports = {
  getProducts,
  getProductByID,
  insertProduct,
  updateProductByID,
  deleteProductByID,
};
