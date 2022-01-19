const decodeToken = require('./decodeToken');

const validateToken = (token) => {
  if (!token) {
    return {
      code: 'unauthorized',
      message: 'missing auth token',
    };
  }

  try {
    const userInfos = decodeToken(token);
    return userInfos;
  } catch (error) {
    console.log(error);
  }
};

module.exports = validateToken;