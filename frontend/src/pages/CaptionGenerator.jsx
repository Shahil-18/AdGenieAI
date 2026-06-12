import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Sparkles, Copy, CheckCircle, AlertCircle } from "lucide-react";
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
    setMessage("Copied to clipboard.");
  };

  return (
    <DashboardLayout>
      <div>
        <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
          AI Content Studio
        </p>
        <h1 className="page-title mt-2">Caption Generator</h1>
        <p className="page-subtitle mt-3 max-w-2xl">
          Generate polished advertising captions for social media, product launches, and campaign creatives.
        </p>
      </div>

      {message && (
        <div className="card mt-6 flex items-center gap-3">
          {message.toLowerCase().includes("failed") ? (
            <AlertCircle size={18} className="text-[#dc2626]" />
          ) : (
            <CheckCircle size={18} className="text-[#16a34a]" />
          )}
          <p className="text-sm font-medium">{message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 mt-6">
        <div className="card">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#2563eb]" />
            <h2 className="section-title">Campaign Input</h2>
          </div>

          <p className="page-subtitle mt-2">
            Provide basic campaign details and let AdGenie generate structured caption options.
          </p>

          <form onSubmit={handleGenerate} className="space-y-5 mt-6">
            <Field
              label="Product or Service"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="AC Voltage Stabilizer"
            />

            <Field
              label="Target Audience"
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              placeholder="Homeowners, dealers, retailers"
            />

            <div>
              <label className="text-sm font-medium block mb-2">Tone</label>
              <select
                name="tone"
                value={formData.tone}
                onChange={handleChange}
                className="input-modern"
              >
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="luxury">Luxury</option>
                <option value="bold">Bold</option>
                <option value="funny">Funny</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="input-modern"
              >
                <option value="English">English</option>
                <option value="Hinglish">Hinglish</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>

            <button disabled={loading} className="btn-primary w-full">
              {loading ? "Generating..." : "Generate Captions"}
            </button>
          </form>
        </div>

        <div className="card">
          <div className="flex justify-between items-center gap-4">
            <div>
              <h2 className="section-title">Generated Output</h2>
              <p className="page-subtitle mt-1">
                Copy and use the generated captions directly in your campaigns.
              </p>
            </div>

            {caption && (
              <button onClick={handleCopy} className="btn-secondary inline-flex items-center gap-2">
                <Copy size={16} />
                Copy
              </button>
            )}
          </div>

          <div className="mt-6 min-h-[420px] bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-5 whitespace-pre-wrap text-sm text-[#374151] leading-6">
            {loading ? (
              <LoadingState />
            ) : caption ? (
              caption
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Field({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-2">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-modern"
      />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="h-full min-h-[360px] flex flex-col items-center justify-center text-center">
      <Sparkles size={28} className="text-[#9ca3af]" />
      <h3 className="font-semibold mt-4">No captions generated yet</h3>
      <p className="page-subtitle mt-2 max-w-sm">
        Fill the campaign form and generate professional captions for your business.
      </p>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="space-y-3">
      <div className="h-4 bg-[#e5e7eb] rounded w-3/4 animate-pulse" />
      <div className="h-4 bg-[#e5e7eb] rounded w-full animate-pulse" />
      <div className="h-4 bg-[#e5e7eb] rounded w-5/6 animate-pulse" />
      <div className="h-4 bg-[#e5e7eb] rounded w-2/3 animate-pulse" />
    </div>
  );
}

export default CaptionGenerator;