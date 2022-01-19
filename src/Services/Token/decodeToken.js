const jwt = require('jsonwebtoken');

const KEY_SECRET = 'MySuperComplexPassword';

const decodeToken = (token) => {
  try {
    const userInfos = jwt.decode(token, KEY_SECRET);
    if (!userInfos) {
      return { 
        code: 'unauthorized',
        message: 'jwt malformed',
      };
    }
    return userInfos;
  } catch (error) {
    console.log(error);
  }
};

module.exports = decodeToken;