import { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Copy, ArrowLeft } from "lucide-react";
import API from "../api/authApi";

function PosterGenerator() {
  const [formData, setFormData] = useState({
    product: "",
    offer: "",
    audience: "",
    style: "Premium",
  });

  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await API.post(
        "/ai/poster",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOutput(res.data.posterPrompt);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/dashboard" className="text-slate-400">
          ← Dashboard
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-slate-900 p-8 rounded-3xl">
            <h1 className="text-3xl font-black mb-6 flex gap-3 items-center">
              <Image />
              AI Poster Generator
            </h1>

            <form onSubmit={handleGenerate} className="space-y-4">
              <input
                placeholder="Product"
                className="w-full p-4 bg-slate-800 rounded-xl"
                onChange={(e) =>
                  setFormData({ ...formData, product: e.target.value })
                }
              />

              <input
                placeholder="Offer"
                className="w-full p-4 bg-slate-800 rounded-xl"
                onChange={(e) =>
                  setFormData({ ...formData, offer: e.target.value })
                }
              />

              <input
                placeholder="Audience"
                className="w-full p-4 bg-slate-800 rounded-xl"
                onChange={(e) =>
                  setFormData({ ...formData, audience: e.target.value })
                }
              />

              <select
                className="w-full p-4 bg-slate-800 rounded-xl"
                onChange={(e) =>
                  setFormData({ ...formData, style: e.target.value })
                }
              >
                <option>Premium</option>
                <option>Minimal</option>
                <option>Luxury</option>
                <option>Modern</option>
              </select>

              <button className="w-full bg-violet-600 p-4 rounded-xl font-bold">
                {loading ? "Generating..." : "Generate Poster Prompt"}
              </button>
            </form>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <div className="flex justify-between">
              <h2 className="text-2xl font-black">Output</h2>

              {output && (
                <button
                  onClick={() => navigator.clipboard.writeText(output)}
                >
                  <Copy />
                </button>
              )}
            </div>

            <div className="mt-6 whitespace-pre-wrap">
              {output || "Poster prompt will appear here"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosterGenerator;