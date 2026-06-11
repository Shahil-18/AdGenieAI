const User = require("../models/User");

exports.updatePlan = async (req, res) => {
  try {
    const { plan } = req.body;

    if (!["free", "starter", "pro"].includes(plan)) {
      return res.status(400).json({ message: "Invalid plan" });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { plan },
      { new: true }
    ).select("-password");

    res.status(200).json({
      message: "Plan updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};