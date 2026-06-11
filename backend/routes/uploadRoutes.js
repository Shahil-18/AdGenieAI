const express = require("express");
const { uploadLogo } = require("../controllers/uploadController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/logo", protect, uploadLogo);

module.exports = router;