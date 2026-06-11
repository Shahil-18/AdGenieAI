import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Wand2,
  Hash,
  MessageCircle,
  Image,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Palette,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-900">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-bold mb-6">
            <Sparkles size={18} />
            AI Marketing SaaS for Small Businesses
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Create better ads without hiring an agency.
          </h1>

          <p className="text-slate-600 text-lg mt-6 max-w-xl">
            Generate captions, hashtags, WhatsApp campaigns and poster prompts
            from one professional marketing dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/register"
              className="bg-violet-700 text-white px-7 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              Start Free <ArrowRight size={18} />
            </Link>

            <Link
              to="/login"
              className="bg-white border border-slate-200 px-7 py-4 rounded-xl font-bold text-center"
            >
              Login
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            <TrustBadge icon={<Zap />} text="Fast Generation" />
            <TrustBadge icon={<Shield />} text="Secure Login" />
            <TrustBadge icon={<Palette />} text="Brand Profile" />
          </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-6">
          <div className="bg-gradient-to-br from-violet-700 to-indigo-700 rounded-[1.5rem] p-8 text-white">
            <p className="text-violet-200 font-bold">LIVE PREVIEW</p>

            <h2 className="text-4xl font-black mt-5">
              Grow your business with AI-powered campaigns.
            </h2>

            <p className="text-violet-100 mt-4">
              One dashboard for captions, hashtags, WhatsApp marketing and
              poster ideas.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <Mini title="Captions" value="5 generated" />
              <Mini title="Hashtags" value="20 tags" />
              <Mini title="WhatsApp" value="3 messages" />
              <Mini title="Poster" value="Prompt ready" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-4 gap-6">
          <Stat value="4+" label="AI Tools" />
          <Stat value="24/7" label="Marketing Support" />
          <Stat value="100%" label="MERN Project" />
          <Stat value="SaaS" label="Ready Structure" />
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black">
            Everything you need to market faster
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            AdGenie AI gives small businesses a complete creative workspace for
            daily marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Feature icon={<Wand2 />} title="AI Captions" />
          <Feature icon={<Hash />} title="Hashtag Generator" />
          <Feature icon={<MessageCircle />} title="WhatsApp Campaigns" />
          <Feature icon={<Image />} title="Poster Prompts" />
          <Feature icon={<BarChart3 />} title="Analytics Dashboard" />
          <Feature icon={<Sparkles />} title="Business Branding" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-10 shadow-sm grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-black">
              Built like a real SaaS product.
            </h2>
            <p className="text-slate-600 mt-4">
              Authentication, MongoDB, dashboard analytics, campaign history,
              brand profiles and AI generation are already connected.
            </p>
          </div>

          <div className="space-y-4">
            <Point text="JWT Authentication with MongoDB Atlas" />
            <Point text="Business profile with brand color and slogan" />
            <Point text="Campaign history and analytics dashboard" />
            <Point text="AI-ready generators for marketing content" />
          </div>
        </div>
      </section>

      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-violet-700 rounded-[2rem] p-10 text-center text-white shadow-xl">
          <h2 className="text-4xl font-black">
            Made for business owners, freelancers and creators.
          </h2>
          <p className="text-violet-100 mt-4 max-w-2xl mx-auto">
            Create daily marketing content without depending on designers,
            copywriters or agencies.
          </p>
        </div>
      </section>

      <section id="pricing" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black">Simple pricing</h2>
          <p className="text-slate-600 mt-4">
            Start free. Upgrade when your business grows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Price
            name="Free"
            price="₹0"
            features={["10 creatives/month", "Basic tools", "Campaign history"]}
          />

          <Price
            name="Starter"
            price="₹299"
            active
            features={[
              "100 creatives/month",
              "Premium templates",
              "WhatsApp campaigns",
            ]}
          />

          <Price
            name="Pro"
            price="₹999"
            features={[
              "Unlimited creatives",
              "Advanced analytics",
              "Priority AI models",
            ]}
          />
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500">
        AdGenie AI © 2026 — Built by Shahil Sharma
      </footer>
    </div>
  );
}

function TrustBadge({ icon, text }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
      <div className="text-violet-700">{icon}</div>
      <p className="font-bold text-sm">{text}</p>
    </div>
  );
}

function Mini({ title, value }) {
  return (
    <div className="bg-white/15 rounded-2xl p-4">
      <p className="font-black">{title}</p>
      <p className="text-violet-100 text-sm mt-1">{value}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
      <h3 className="text-4xl font-black text-violet-700">{value}</h3>
      <p className="text-slate-500 mt-2 font-semibold">{label}</p>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
      <div className="w-12 h-12 bg-violet-100 text-violet-700 rounded-2xl flex items-center justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-black mt-5">{title}</h3>

      <p className="text-slate-500 mt-2">
        Professional marketing tools designed for speed, simplicity and business
        growth.
      </p>
    </div>
  );
}

function Point({ text }) {
  return (
    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-4">
      <CheckCircle className="text-violet-700" size={22} />
      <p className="font-semibold text-slate-700">{text}</p>
    </div>
  );
}

function Price({ name, price, active, features }) {
  return (
    <div
      className={`rounded-3xl p-8 border shadow-sm ${
        active
          ? "bg-violet-700 text-white border-violet-700 scale-105"
          : "bg-white border-slate-200"
      }`}
    >
      <h3 className="text-2xl font-black">{name}</h3>

      <p className="text-5xl font-black mt-5">{price}</p>

      <p className={active ? "text-violet-100" : "text-slate-500"}>
        per month
      </p>

      <div className="mt-8 space-y-3">
        {features.map((item) => (
          <p key={item}>✅ {item}</p>
        ))}
      </div>

      <Link
        to="/register"
        className={`block text-center w-full mt-8 py-3 rounded-xl font-bold ${
          active ? "bg-white text-violet-700" : "bg-slate-900 text-white"
        }`}
      >
        Choose Plan
      </Link>
    </div>
  );
}

export default Home;