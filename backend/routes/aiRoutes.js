const express = require("express");
const { checkUsageLimit } = require("../middleware/usageLimit");
const {
  generateCaption,
  generateHashtags,
  generateWhatsApp,
  generatePosterPrompt,
} = require("../controllers/aiController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/caption", protect, checkUsageLimit, generateCaption);
router.post("/hashtags", protect, checkUsageLimit, generateHashtags);
router.post("/whatsapp", protect, checkUsageLimit, generateWhatsApp);
router.post("/poster", protect, checkUsageLimit, generatePosterPrompt);

module.exports = router;