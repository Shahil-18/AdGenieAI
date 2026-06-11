const cloudinary = require("../config/cloudinary");

exports.uploadLogo = async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    const uploaded = await cloudinary.uploader.upload(image, {
      folder: "adgenie-logos",
    });

    res.status(200).json({
      logoUrl: uploaded.secure_url,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Logo upload failed",
    });
  }
};