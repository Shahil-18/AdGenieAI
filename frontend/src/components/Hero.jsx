import { Link } from "react-router-dom";
import { Sparkles, Wand2, Image, MessageCircle } from "lucide-react";

function Hero() {
  return (
    <section className="px-8 py-24 grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
      <div>
        <div className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-300 px-4 py-2 rounded-full border border-violet-500/20 mb-6">
          <Sparkles size={18} />
          AI Ads for Small Businesses
        </div>

        <h1 className="text-5xl lg:text-7xl font-black leading-tight">
          Create professional ads in minutes.
        </h1>

        <p className="text-slate-400 text-lg mt-6 max-w-xl">
          Generate captions, hashtags, posters and WhatsApp campaigns for any
          business using AI-powered brand tools.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            to="/register"
            className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-semibold"
          >
            Start Free
          </Link>

          <Link
            to="/login"
            className="border border-slate-700 px-6 py-3 rounded-xl font-semibold"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
        <div className="bg-gradient-to-br from-violet-600 to-cyan-500 rounded-2xl p-6 min-h-[360px]">
          <p className="text-sm font-bold opacity-80">AI GENERATED CAMPAIGN</p>
          <h2 className="text-4xl font-black mt-6">
            Grow your brand with smarter ads.
          </h2>
          <p className="mt-4 text-white/80">
            Captions, hashtags, poster ideas and WhatsApp messages generated
            instantly.
          </p>

          <div className="grid grid-cols-3 gap-3 mt-10">
            <Card icon={<Wand2 />} title="Caption" />
            <Card icon={<Image />} title="Poster" />
            <Card icon={<MessageCircle />} title="WhatsApp" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title }) {
  return (
    <div className="bg-white/15 rounded-xl p-4">
      {icon}
      <p className="font-semibold mt-3">{title}</p>
    </div>
  );
}

export default Hero;