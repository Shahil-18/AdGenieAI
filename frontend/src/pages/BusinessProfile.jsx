import { useState } from "react";

export default function BusinessProfile() {
  const [form, setForm] = useState({
    businessName: "",
    industry: "",
    slogan: "",
    tone: "Professional",
    audience: "",
    colors: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-[2rem] bg-black p-8 text-white shadow-2xl shadow-black/20">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-white/40">
          Brand Setup
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.05em]">
          Make every campaign feel on-brand.
        </h1>
        <p className="mt-5 text-sm font-semibold leading-7 text-white/50">
          Save your business details once and AdGenie AI will create better captions,
          WhatsApp messages and campaign ideas.
        </p>

        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5">
          <p className="text-sm font-black text-white/45">Profile Completion</p>
          <div className="mt-4 h-3 rounded-full bg-white/10">
            <div className="h-3 w-[72%] rounded-full bg-emerald-400" />
          </div>
          <p className="mt-3 text-xs font-bold text-white/40">72% ready</p>
        </div>
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white/75 p-7 shadow-sm">
        <h2 className="text-2xl font-black tracking-tight">Business Profile</h2>

        <form className="mt-6 grid gap-4">
          <input
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            placeholder="Business name"
            className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
          />

          <input
            name="industry"
            value={form.industry}
            onChange={handleChange}
            placeholder="Industry"
            className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
          />

          <input
            name="slogan"
            value={form.slogan}
            onChange={handleChange}
            placeholder="Brand slogan"
            className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
          />

          <select
            name="tone"
            value={form.tone}
            onChange={handleChange}
            className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
          >
            <option>Professional</option>
            <option>Friendly</option>
            <option>Luxury</option>
            <option>Bold</option>
          </select>

          <textarea
            name="audience"
            value={form.audience}
            onChange={handleChange}
            placeholder="Target audience"
            className="min-h-28 rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
          />

          <input
            name="colors"
            value={form.colors}
            onChange={handleChange}
            placeholder="Brand colors"
            className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
          />

          <button
            type="button"
            className="rounded-2xl bg-black px-6 py-4 text-sm font-black text-white transition hover:bg-[#262626]"
          >
            Save Profile
          </button>
        </form>
      </section>
    </div>
  );
}