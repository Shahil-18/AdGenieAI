import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Copy, ArrowLeft } from "lucide-react";
import { generateWhatsApp } from "../api/aiApi";

function WhatsAppGenerator() {
  const [formData, setFormData] = useState({
    product: "",
    offer: "",
    audience: "",
  });

  const [campaign, setCampaign] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await generateWhatsApp(formData);
      setCampaign(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to generate campaign");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(campaign);
    setMessage("Copied to clipboard ✅");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8">
          <ArrowLeft size={18} /> Back to Dashboard
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center">
                <MessageCircle />
              </div>
              <div>
                <h1 className="text-3xl font-black">WhatsApp Campaign</h1>
                <p className="text-slate-400">Generate customer-friendly marketing messages.</p>
              </div>
            </div>

            {message && <div className="mb-5 bg-green-600/20 border border-green-500/40 rounded-xl p-4">{message}</div>}

            <form onSubmit={handleGenerate} className="space-y-5">
              <input name="product" value={formData.product} onChange={handleChange} placeholder="Product or Service" className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-green-500" />
              <input name="offer" value={formData.offer} onChange={handleChange} placeholder="Offer e.g. 20% off / Free delivery" className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-green-500" />
              <input name="audience" value={formData.audience} onChange={handleChange} placeholder="Target Audience" className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-green-500" />

              <button disabled={loading} className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 p-4 rounded-xl font-bold">
                {loading ? "Generating..." : "Generate Campaign"}
              </button>
            </form>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black">Generated Campaign</h2>
              {campaign && (
                <button onClick={handleCopy} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl">
                  <Copy size={18} /> Copy
                </button>
              )}
            </div>

            <div className="min-h-[420px] bg-slate-950 border border-slate-800 rounded-2xl p-6 whitespace-pre-wrap text-slate-300 leading-relaxed">
              {campaign || "Your WhatsApp campaign will appear here."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsAppGenerator;