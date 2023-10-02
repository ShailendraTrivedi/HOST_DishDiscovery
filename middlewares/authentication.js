const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constant");

// Function to generate a JWT token for a user
const generateAuthToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

// Function to verify and decode a JWT token
const verifyAuthToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    // Token verification failed
    return null;
  }
};

module.exports = {
  generateAuthToken,
  verifyAuthToken,
};
