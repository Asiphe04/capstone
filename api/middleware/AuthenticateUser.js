require("dotenv").config();
const { sign } = require("jsonwebtoken");

module.exports = {
  // Creating a token
  createToken(user) {
    return sign(
      {
        emailAdd: user.emailAdd,
        userPass: user.userPass,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
  },
};
