import { Wand2, Image, MessageCircle, BarChart3, Palette, CreditCard } from "lucide-react";

const features = [
  { icon: <Wand2 />, title: "AI Caption Generator", text: "Create ad captions, hooks and product lines instantly." },
  { icon: <Image />, title: "Poster Ideas", text: "Generate poster concepts for Instagram, Facebook and WhatsApp." },
  { icon: <MessageCircle />, title: "WhatsApp Campaigns", text: "Create customer-friendly promotional messages quickly." },
  { icon: <Palette />, title: "Brand Profile", text: "Save business name, colors, slogans and industry." },
  { icon: <BarChart3 />, title: "Dashboard", text: "Track generated ads, usage and campaign activity." },
  { icon: <CreditCard />, title: "Subscriptions", text: "Free and premium plans for SaaS monetization." },
];

function Features() {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">
      <h2 className="text-4xl font-black text-center">Built for fast marketing</h2>
      <p className="text-slate-400 text-center mt-4">
        Everything a small business needs to create better ads.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {features.map((item) => (
          <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mt-5">{item.title}</h3>
            <p className="text-slate-400 mt-3">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;