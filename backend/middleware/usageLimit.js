const Campaign = require("../models/Campaign");

exports.checkUsageLimit = async (req, res, next) => {
  const user = req.user;

  const limits = {
    free: 100,
    starter: 500,
    pro: 99999,
  };

  const limit = limits[user.plan] || 100;

  const used = await Campaign.countDocuments({
    user: user._id,
  });

  if (used >= limit) {
    return res.status(403).json({
      message: "Campaign limit reached. Please upgrade your plan.",
    });
  }

  next();
};