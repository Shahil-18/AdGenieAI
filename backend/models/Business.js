const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    businessName: {
      type: String,
      required: true,
      trim: true,
    },
    industry: {
      type: String,
      required: true,
      trim: true,
    },
    slogan: {
      type: String,
      trim: true,
      default: "",
    },
    website: {
  type: String,
  default: "",
},
logoUrl: {
  type: String,
  default: "",
},
    brandColor: {
      type: String,
      default: "#111827",
    },
    logoUrl: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Business", businessSchema);