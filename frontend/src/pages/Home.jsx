import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Hash,
  MessageCircle,
  Image,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111827]">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-[#e5e7eb] px-3 py-2 rounded-full text-sm font-semibold text-[#2563eb]">
            <Sparkles size={16} />
            AI marketing workspace
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-tight mt-6">
            Create campaign content with enterprise-grade simplicity.
          </h1>

          <p className="text-[#6b7280] text-lg leading-8 mt-6 max-w-xl">
            AdGenie AI helps small businesses generate captions, hashtags,
            WhatsApp campaigns, poster prompts, reports, and brand assets from
            one professional dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link to="/register" className="btn-primary inline-flex items-center justify-center gap-2">
              Start Free <ArrowRight size={18} />
            </Link>

            <Link to="/login" className="btn-secondary text-center">
              Login
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 mt-10">
            <Trust icon={<Shield size={16} />} text="JWT Auth" />
            <Trust icon={<BarChart3 size={16} />} text="Analytics" />
            <Trust icon={<CheckCircle size={16} />} text="Reports" />
          </div>
        </div>

        <div className="bg-white border border-[#e5e7eb] rounded-lg p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="bg-[#0f1117] rounded-lg p-6 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-sm font-semibold">AdGenie Workspace</p>
              <span className="badge bg-[#dcfce7] text-[#16a34a]">Live</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <Preview title="Captions" value="128" />
              <Preview title="Hashtags" value="82" />
              <Preview title="WhatsApp" value="41" />
              <Preview title="Reports" value="16" />
            </div>

            <div className="bg-white rounded-lg p-4 mt-4 text-[#111827]">
              <p className="text-sm font-semibold">Recent Campaign</p>
              <p className="text-sm text-[#6b7280] mt-2 leading-6">
                Generate clean, customer-ready ad captions for your next product campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-[28px] font-bold tracking-[-0.02em]">
            Everything required for daily marketing
          </h2>
          <p className="text-[#6b7280] mt-3">
            Built for business owners, freelancers, and marketing teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <Feature icon={<Sparkles size={18} />} title="AI Captions" />
          <Feature icon={<Hash size={18} />} title="Hashtag Sets" />
          <Feature icon={<MessageCircle size={18} />} title="WhatsApp Campaigns" />
          <Feature icon={<Image size={18} />} title="Poster Prompts" />
          <Feature icon={<BarChart3 size={18} />} title="Analytics" />
          <Feature icon={<Shield size={18} />} title="Secure Workspace" />
        </div>
      </section>

      <section id="pricing" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-[28px] font-bold tracking-[-0.02em] text-center">
          Simple plans for growing teams
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <Price name="Free" price="₹0" />
          <Price name="Starter" price="₹299" active />
          <Price name="Pro" price="₹999" />
        </div>
      </section>

      <footer className="border-t border-[#e5e7eb] py-8 text-center text-sm text-[#6b7280]">
        AdGenie AI © 2026 — Built by Shahil Sharma
      </footer>
    </div>
  );
}

function Trust({ icon, text }) {
  return (
    <div className="card flex items-center gap-2">
      <span className="text-[#2563eb]">{icon}</span>
      <p className="text-sm font-semibold">{text}</p>
    </div>
  );
}

function Preview({ title, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
      <p className="text-xs text-slate-400">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="card">
      <div className="w-9 h-9 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
        {icon}
      </div>
      <h3 className="section-title mt-4">{title}</h3>
      <p className="page-subtitle mt-2">
        Professional-grade workflow built for speed and consistency.
      </p>
    </div>
  );
}

function Price({ name, price, active }) {
  return (
    <div className={`card ${active ? "border-[#2563eb]" : ""}`}>
      <h3 className="section-title">{name}</h3>
      <p className="text-4xl font-bold mt-4">{price}</p>
      <p className="page-subtitle mt-1">per month</p>

      <div className="space-y-3 mt-6 text-sm text-[#4b5563]">
        <p>✓ Campaign generation</p>
        <p>✓ Reports dashboard</p>
        <p>✓ Brand profile</p>
      </div>

      <Link to="/register" className={`block text-center mt-6 ${active ? "btn-primary" : "btn-secondary"}`}>
        Choose Plan
      </Link>
    </div>
  );
}

export default Home;