//Import database connection
const db = require("../config/db");
const getCart = (id, result) => {
  db.query(
    `SELECT cart.cartID, products.prodID, products.prodName, products.description, products.amount, products.prodUrl
FROM users
INNER JOIN cart ON users.userID = cart.userID
INNER JOIN products ON cart.prodID = products.prodID
WHERE cart.userID = ?
 `,
    [id],
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

// const getCart = (id, result) => {
//   db.query(
//     `SELECT prodName,description ,amount ,prodUrl
//      FROM users
//      INNER JOIN cart ON users.userID = cart.userID
//     INNER JOIN products ON cart.prodID = products.prodID
//     WHERE cart.userID = ? `,
//     [id],
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         result(err, null);
//       } else {
//         result(null, results);
//       }
//     }
//   );
// };
const insertCart = (data, result) => {
  db.query("INSERT INTO cart SET ?;", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
// const insertCart = (userID, prodID, callback) => {
//   db.query(
//     'INSERT INTO cart (userID, prodID) VALUES (?, ?)',
//     [userID, prodID],
//     (err, results) => {
//       if (err) {
//         console.log('Database error');
//         callback(err, null);
//       } else {
//         callback(null, results);
//       }
//     }
//   );
// };

const updateCartbyId = (data, id, result) => {
  db.query(
    `UPDATE cart SET ? WHERE cartID = ? `,
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
const removeCart = ( cartID, callback) => {
  db.query(
    'DELETE FROM cart WHERE cartID = ?',
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

// const removeCart = (id, result) => {
//   db.query(`DELETE FROM cart WHERE cartID = ?`, [cartID], (err, results) => {
//     if (err) {
//       console.log(err);
//       result(err, null);
//     } else {
//       result(null, results);
//     }
//   });
// };

const removeAllcartItems = (id, result) => {
  db.query(`DELETE FROM cart WHERE userID = ?`, id, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

module.exports = {
  getCart,
  insertCart,
  updateCartbyId,
  removeCart,
  removeAllcartItems,
};
