const express = require("express");
const { updatePlan } = require("../controllers/subscriptionController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/update-plan", protect, updatePlan);

module.exports = router;