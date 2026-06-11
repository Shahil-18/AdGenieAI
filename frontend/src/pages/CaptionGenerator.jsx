import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Copy, ArrowLeft } from "lucide-react";
import { generateCaption } from "../api/aiApi";

function CaptionGenerator() {
  const [formData, setFormData] = useState({
    product: "",
    audience: "",
    tone: "professional",
    language: "English",
  });

  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setMessage("");
    setCaption("");
    setLoading(true);

    try {
      const res = await generateCaption(formData);
      setCaption(res.data.caption);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to generate caption");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(caption);
    setMessage("Copied to clipboard ✅");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center">
                <Sparkles />
              </div>
              <div>
                <h1 className="text-3xl font-black">AI Caption Generator</h1>
                <p className="text-slate-400">
                  Generate ad captions for your business.
                </p>
              </div>
            </div>

            {message && (
              <div className="mb-5 bg-violet-600/20 border border-violet-500/40 rounded-xl p-4">
                {message}
              </div>
            )}

            <form onSubmit={handleGenerate} className="space-y-5">
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                placeholder="Product or Service"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-violet-500"
              />

              <input
                type="text"
                name="audience"
                value={formData.audience}
                onChange={handleChange}
                placeholder="Target Audience"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-violet-500"
              />

              <select
                name="tone"
                value={formData.tone}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-violet-500"
              >
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="luxury">Luxury</option>
                <option value="bold">Bold</option>
                <option value="funny">Funny</option>
              </select>

              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-violet-500"
              >
                <option value="English">English</option>
                <option value="Hinglish">Hinglish</option>
                <option value="Hindi">Hindi</option>
              </select>

              <button
                disabled={loading}
                className="w-full bg-violet-600 hover:bg-violet-700 disabled:opacity-60 p-4 rounded-xl font-bold"
              >
                {loading ? "Generating..." : "Generate Captions"}
              </button>
            </form>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black">Generated Output</h2>

              {caption && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl"
                >
                  <Copy size={18} />
                  Copy
                </button>
              )}
            </div>

            <div className="min-h-[420px] bg-slate-950 border border-slate-800 rounded-2xl p-6 whitespace-pre-wrap text-slate-300 leading-relaxed">
              {caption || "Your AI-generated captions will appear here."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptionGenerator;