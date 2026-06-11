const Campaign = require("../models/Campaign");

exports.getCampaigns = async (req, res) => {
  const campaigns = await Campaign.find({ user: req.user._id }).sort({
    createdAt: -1,
  });

  res.status(200).json({ campaigns });
};

exports.getAnalytics = async (req, res) => {
  const userId = req.user._id;

  const totalCaptions = await Campaign.countDocuments({
    user: userId,
    type: "caption",
  });

  const totalHashtags = await Campaign.countDocuments({
    user: userId,
    type: "hashtags",
  });

  const totalWhatsApp = await Campaign.countDocuments({
    user: userId,
    type: "whatsapp",
  });

  const totalPosters = await Campaign.countDocuments({
    user: userId,
    type: "poster",
  });

  res.status(200).json({
    totalCaptions,
    totalHashtags,
    totalWhatsApp,
    totalPosters,
    totalCampaigns:
      totalCaptions + totalHashtags + totalWhatsApp + totalPosters,
  });
};