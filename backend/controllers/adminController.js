const User = require("../models/User");
const Campaign = require("../models/Campaign");

exports.getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCampaigns = await Campaign.countDocuments();

    const captions = await Campaign.countDocuments({ type: "caption" });
    const hashtags = await Campaign.countDocuments({ type: "hashtags" });
    const whatsapp = await Campaign.countDocuments({ type: "whatsapp" });
    const posters = await Campaign.countDocuments({ type: "poster" });

    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    const recentCampaigns = await Campaign.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json({
      totalUsers,
      totalCampaigns,
      captions,
      hashtags,
      whatsapp,
      posters,
      users,
      recentCampaigns,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};