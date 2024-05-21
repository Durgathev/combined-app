const multer = require("multer");

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const upload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "upload/images");
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE[file.mimetype];
      cb(null, file.fieldname + "-" + Date.now() + "." + ext);
    },
  }),

  fileFilter: (req, file, cb) => {
    let isValid = !!MIME_TYPE[file.mimetype];
    let error = isValid ? null : new Error("invalid mime type");
    cb(error, isValid);
  },
});

module.exports = upload;
