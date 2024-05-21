const multer = require("multer");
const { fields } = require("./upload");

const MIME_TYPE = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
};

const userImage = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "upload/userimage");
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE[file.mimetype];
      cb(null, file.fieldname + " - " + Date.now() + "." + ext);
    },
  }),

  fileFilter: (req, file, cb) => {
    let isValid = !!MIME_TYPE[file.mimetype];
    let error = isValid ? null : new Error("invalid mime type");
    cb(error, isValid);
  },
});

module.exports = userImage;
