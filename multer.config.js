const multer = require('multer');
const path = require('path');

module.exports = {
  dest: path.resolve(__dirname, 'src', 'uploads'),
  storage: multer.diskStorage(
    {
      destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, 'src', 'uploads'));
      },
      filename: (req, file, cb) => {
        const { id } = req.params;
        const name = `${id}.jpeg`;
        cb(null, name);
      },
    },
),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb({ code: 'invaliddata ' });
    }
  },

};
