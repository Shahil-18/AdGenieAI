import { useState } from "react";
import { Sparkles, Copy, CheckCircle, AlertCircle } from "lucide-react";
import { generateCaption } from "../api/aiApi";

export default function CaptionGenerator() {
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
      setCaption(res.data.caption || res.data.data || "Caption generated.");
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
    <div className="w-full space-y-8 overflow-hidden">
      <section className="rounded-[2rem] bg-black p-6 text-white shadow-2xl shadow-black/20 md:p-8">
        <p className="text-sm font-black text-white/45">AI Content Studio</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-[-0.06em] md:text-5xl">
          Caption Generator
        </h1>
        <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/50">
          Generate polished advertising captions for social media, product
          launches and campaign creatives.
        </p>
      </section>

      {message && (
        <div className="flex items-center gap-3 rounded-[1.5rem] border border-white/50 bg-white/65 p-5 shadow-sm backdrop-blur-2xl">
          {message.toLowerCase().includes("failed") ? (
            <AlertCircle size={18} className="text-red-600" />
          ) : (
            <CheckCircle size={18} className="text-emerald-600" />
          )}
          <p className="text-sm font-black text-black/70">{message}</p>
        </div>
      )}

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/50 bg-white/65 p-6 shadow-sm backdrop-blur-2xl md:p-7">
          <div className="flex items-center gap-2">
            <Sparkles size={18} />
            <h2 className="text-2xl font-black tracking-[-0.05em]">
              Campaign Input
            </h2>
          </div>

          <p className="mt-3 text-sm font-semibold leading-6 text-black/50">
            Add your campaign details and let AdGenie generate caption options.
          </p>

          <form onSubmit={handleGenerate} className="mt-6 space-y-5">
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
              <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-black/35">
                Tone
              </label>
              <select
                name="tone"
                value={formData.tone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-black/10 bg-white/65 px-5 py-4 text-sm font-bold outline-none backdrop-blur-xl focus:border-black"
              >
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="luxury">Luxury</option>
                <option value="bold">Bold</option>
                <option value="funny">Funny</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-black/35">
                Language
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full rounded-2xl border border-black/10 bg-white/65 px-5 py-4 text-sm font-bold outline-none backdrop-blur-xl focus:border-black"
              >
                <option value="English">English</option>
                <option value="Hinglish">Hinglish</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>

            <button
              disabled={loading}
              className="w-full rounded-2xl bg-black px-6 py-4 text-sm font-black text-white shadow-xl shadow-black/20 transition hover:-translate-y-1 disabled:opacity-60"
            >
              {loading ? "Generating..." : "Generate Captions →"}
            </button>
          </form>
        </div>

        <div className="rounded-[2rem] border border-white/50 bg-white/65 p-6 shadow-sm backdrop-blur-2xl md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black tracking-[-0.05em]">
                Generated Output
              </h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-black/50">
                Copy and use the generated caption directly in your campaign.
              </p>
            </div>

            {caption && (
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-black text-white"
              >
                <Copy size={15} />
                Copy
              </button>
            )}
          </div>

          <div className="mt-6 min-h-[420px] rounded-[1.7rem] bg-black p-6 text-white">
            {loading ? (
              <LoadingState />
            ) : caption ? (
              <p className="whitespace-pre-wrap text-sm font-semibold leading-7 text-white/80">
                {caption}
              </p>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-black/35">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-black/10 bg-white/65 px-5 py-4 text-sm font-bold outline-none backdrop-blur-xl focus:border-black"
      />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
      <Sparkles size={32} className="text-white/35" />
      <h3 className="mt-4 text-xl font-black">No captions generated yet</h3>
      <p className="mt-2 max-w-sm text-sm font-semibold leading-6 text-white/40">
        Fill the campaign form and generate professional captions for your
        business.
      </p>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="space-y-4">
      <div className="h-4 w-3/4 animate-pulse rounded bg-white/15" />
      <div className="h-4 w-full animate-pulse rounded bg-white/15" />
      <div className="h-4 w-5/6 animate-pulse rounded bg-white/15" />
      <div className="h-4 w-2/3 animate-pulse rounded bg-white/15" />
    </div>
  );
}