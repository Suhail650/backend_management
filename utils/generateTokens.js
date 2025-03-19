const jwt = require('jsonwebtoken');

const generateToken = (_Id,role) => {
  return jwt.sign({ id: _Id, role }, process.env.JWT_SECRET, {
    expiresIn: '1h', // Token expires in 1 hour
  });
};

module.exports = generateToken;