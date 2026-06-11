const express = require("express");
const {
  getCampaigns,
  getAnalytics,
} = require("../controllers/campaignController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getCampaigns);
router.get("/analytics", protect, getAnalytics);

module.exports = router;