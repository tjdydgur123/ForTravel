const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const multer = require("multer");
const { Product } = require("../models/Product");

//=================================
//             Product
//=================================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single("file");

router.post("/image", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/", (req, res) => {
  const product = new Product(req.body);

  product.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.get("/products", (req, res) => {
  // product collection에 들어 있는 모든 상품 정보를 가져오기
  Product.find()
    .populate("writer") // popluate let you bring the writer's data in the other document
    .exec((err, productInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, productInfo });
    });
});

module.exports = router;
