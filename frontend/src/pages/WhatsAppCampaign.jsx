import { useState } from "react";

export default function WhatsAppCampaign() {
  const [form, setForm] = useState({
    product: "",
    offer: "",
    audience: "",
  });

  const [output, setOutput] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateCampaign = () => {
    setOutput(
      `Hi 👋\n\nIntroducing ${form.product || "your product"} — made for ${
        form.audience || "your customers"
      }.\n\n${form.offer || "Special offer available now."}\n\nReply YES to know more.`
    );
  };

  const copyText = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-[2rem] bg-black p-8 text-white shadow-2xl shadow-black/20">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-white/40">
          WhatsApp Campaign
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-[-0.05em]">
          Create customer-ready WhatsApp ads.
        </h1>

        <p className="mt-5 text-sm font-semibold leading-7 text-white/50">
          Write short, direct and sales-focused messages for your audience.
        </p>
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white/75 p-7 shadow-sm">
        <h2 className="text-2xl font-black tracking-tight">Campaign Details</h2>

        <div className="mt-6 grid gap-4">
          <input
            name="product"
            value={form.product}
            onChange={handleChange}
            placeholder="Product name"
            className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
          />

          <input
            name="offer"
            value={form.offer}
            onChange={handleChange}
            placeholder="Offer"
            className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
          />

          <input
            name="audience"
            value={form.audience}
            onChange={handleChange}
            placeholder="Target audience"
            className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
          />

          <button
            onClick={generateCampaign}
            className="rounded-2xl bg-black px-6 py-4 text-sm font-black text-white transition hover:bg-[#262626]"
          >
            Generate Campaign
          </button>
        </div>

        {output && (
          <div className="mt-6 rounded-[1.5rem] bg-[#f6f4ef] p-5">
            <p className="whitespace-pre-line text-sm font-bold leading-7 text-black/70">
              {output}
            </p>

            <button
              onClick={copyText}
              className="mt-5 rounded-2xl border border-black/10 px-5 py-3 text-sm font-black hover:bg-black hover:text-white"
            >
              Copy Message
            </button>
          </div>
        )}
      </section>
    </div>
  );
}