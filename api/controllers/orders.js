const {
  getCart,
  insertCart,
  removeAllcartItems,
  removeCart,
  updateCartbyId,
} = require("../models/orderModels.js");

const showCart = (req, res) => {
  getCart(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

const createCart = (req, res) => {
  const data = [req.body];
  insertCart(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

const updateCart = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateCartbyId(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

const deleteCart = (req, res) => {
  const id = req.params.id;
  removeCart(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

const deleteAllCartItems = (req, res) => {
  const id = req.params.id;
  removeAllcartItems(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  showCart,
  createCart,
  updateCart,
  deleteCart,
  deleteAllCartItems,
};
