// cart models

const db = require("../config/db.js");
const { createToken } = require("../middleware/AuthenticateUser.js")
const { compare } = require("bcrypt")


// Get everything from users cart
const getCart = (id, result,) => {
  db.query("SELECT Cart.cartID, Products.prodName AS prodName, Products.amount, Products.quantity FROM Cart JOIN Products ON Cart.prodID = Products.prodID WHERE Cart.userID = ?",
   [id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}

//add something to cart

const insertCart = (userID, prodID, callback) => {
  db.query(
    'INSERT INTO Cart (userID, prodID) VALUES (?, ?)',
    [userID, prodID],
    (err, results) => {
      if (err) {
        console.log('Database error');
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};


// delete specific item 
const deleteCartItem = ( cartID, callback) => {
  db.query(
    'DELETE FROM Cart WHERE cartID = ?',
    [cartID],
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
};


const deleteAllItems = ( userID, callback) => {
  db.query(
    'DELETE FROM Cart WHERE userID = ?',
    [userID],
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
};

//update cart

const updateCartById = (data, id, result) => {
  db.query(
    `UPDATE Cart SET ? WHERE cartID = ? `,
    [data, id],
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

module.exports = {
    getCart,
    insertCart,
    deleteCartItem,
    deleteAllItems,
    updateCartById,
  };














