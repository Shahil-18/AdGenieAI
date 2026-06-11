const Business = require("../models/Business");

exports.createOrUpdateBusiness = async (req, res) => {
  try {
    const { businessName, industry, slogan, brandColor, logoUrl } = req.body;

    if (!businessName || !industry) {
      return res.status(400).json({
        message: "Business name and industry are required",
      });
    }

    const business = await Business.findOneAndUpdate(
      { user: req.user._id },
      {
        user: req.user._id,
        businessName,
        industry,
        slogan,
        brandColor,
        logoUrl,
      },
      { new: true, upsert: true }
    );

    res.status(200).json({
      message: "Business profile saved successfully",
      business,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBusiness = async (req, res) => {
  try {
    const business = await Business.findOne({ user: req.user._id });

    res.status(200).json({
      business,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};