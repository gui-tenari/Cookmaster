const validateToken = require('../../Services/Token/validateToken');

const TokenValidation = (req, _res, next) => {
  const token = req.headers.authorization; 
  // Usuário existe
  const userInfos = validateToken(token);
  if (userInfos.code) {
    return next(userInfos);
  } 
  const { role, _id: userId } = userInfos;
  if (role === 'admin') {
    req.role = role;
  } else {
    req.role = 'user';
  }
  req.userId = userId;
  return next();
};

module.exports = TokenValidation;