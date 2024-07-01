import express from "express";
import adminController from "../controller/adminController.js";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "/public/images/productImages"));
  },
  filename: function (req, file, cb) {
    const img_name = Date.now() + '-' + file.originalname;
    cb(null, img_name);
  }
});

const upload = multer({ storage });

router.post("/admin", upload.single('imageOfRes'), adminController);

export default router;
