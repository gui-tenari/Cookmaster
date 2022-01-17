const jwt = require('jsonwebtoken');

const KEY_SECRET = 'MySuperComplexPassword';

const jwtConfig = {
expiresIn: '1h',
algorithm: 'HS256',
};

const createToken = (payload) => {
  const token = jwt.sign(payload, KEY_SECRET, jwtConfig);
  return token;
};

module.exports = createToken;