require("dotenv").config();

const axios = require("axios");
const Campaign = require("../models/Campaign");

console.log(
  "OPENROUTER KEY:",
  process.env.OPENROUTER_API_KEY ? "FOUND" : "MISSING"
);

const models = [
  "qwen/qwen3-235b-a22b:free",
  "meta-llama/llama-3.3-70b-instruct:free",
  "mistralai/mistral-7b-instruct:free",
];

const callOpenRouter = async (prompt) => {
  for (const model of models) {
    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model,
          messages: [{ role: "user", content: prompt }],
          temperature: 0.8,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "AdGenie AI",
          },
        }
      );

      return response.data?.choices?.[0]?.message?.content;
    } catch (err) {
      console.log(
        `Model failed: ${model}`,
        err.response?.data?.error?.message || err.message
      );
    }
  }

  return null;
};

const saveCampaign = async (userId, type, input, output) => {
  await Campaign.create({
    user: userId,
    type,
    input,
    output,
  });
};

exports.generateCaption = async (req, res) => {
  const { product, audience, tone, language } = req.body;

  const prompt = `
Create 5 professional advertisement captions.

Product: ${product}
Audience: ${audience}
Tone: ${tone || "professional"}
Language: ${language || "English"}

Return only numbered captions.
`;

  const output =
    (await callOpenRouter(prompt)) ||
    `
1. Make every day smarter with ${product} — perfect for ${audience}.
2. Reliable, modern, and made for your needs. Choose ${product} today.
3. Give ${audience} a better experience with ${product}.
4. Smart choice. Strong value. Real results with ${product}.
5. Upgrade your lifestyle with ${product} — built to perform.
`;

  await saveCampaign(req.user._id, "caption", req.body, output);

  res.status(200).json({ caption: output });
};

exports.generateHashtags = async (req, res) => {
  const { product, industry, location } = req.body;

  const prompt = `
Create 20 marketing hashtags.

Product: ${product}
Industry: ${industry}
Location: ${location}

Return only hashtags.
`;

  const output =
    (await callOpenRouter(prompt)) ||
    `
#${product.replace(/\s+/g, "")}
#${industry.replace(/\s+/g, "")}
#SmallBusiness
#Marketing
#AdGenieAI
#BusinessGrowth
#SmartAds
#DigitalMarketing
#${location.replace(/\s+/g, "")}
#BrandPromotion
`;

  await saveCampaign(req.user._id, "hashtags", req.body, output);

  res.status(200).json({ hashtags: output });
};

exports.generateWhatsApp = async (req, res) => {
  const { product, offer, audience } = req.body;

  const prompt = `
Create a WhatsApp marketing campaign.

Product: ${product}
Offer: ${offer}
Audience: ${audience}

Return:
1. Professional WhatsApp Message
2. Short WhatsApp Message
3. Call To Action
`;

  const output =
    (await callOpenRouter(prompt)) ||
    `
Professional WhatsApp Message:
Hello! We have a special offer on ${product}. ${offer}. Perfect for ${audience}. Contact us today to know more.

Short WhatsApp Message:
Special offer on ${product}! ${offer}. Message now.

Call To Action:
Reply "YES" to get details.
`;

  await saveCampaign(req.user._id, "whatsapp", req.body, output);

  res.status(200).json({ message: output });
};

exports.generatePosterPrompt = async (req, res) => {
  const { product, offer, audience, style } = req.body;

  const output = `
AI Poster Prompt:
Create a ${style || "modern"} advertisement poster for ${product}.
Target Audience: ${audience}
Offer: ${offer}

Design Style:
- Premium SaaS-style ad layout
- Bold headline
- Product-focused visual
- Strong CTA button
- Clean background
- Social-media ready 1:1 ratio

Headline:
${product} for ${audience}

CTA:
Grab the Offer Today
`;

  await saveCampaign(req.user._id, "poster", req.body, output);

  res.status(200).json({ posterPrompt: output });
};