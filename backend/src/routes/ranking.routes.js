const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB file size limit
  }
});

const {
  generateRanking,
  downloadCSV
} = require("../controllers/ranking.controller");

router.get("/", generateRanking);
router.post("/", upload.any(), generateRanking);
router.get("/download", downloadCSV);

module.exports = router;