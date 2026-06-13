import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    "AI Captions",
    "Hashtags",
    "WhatsApp Ads",
    "Poster Prompts",
    "Analytics",
    "Brand Profile",
  ];

  const plans = [
    {
      name: "Free",
      price: "₹0",
      desc: "Start testing AdGenie AI",
      active: false,
    },
    {
      name: "Starter",
      price: "₹299",
      desc: "For daily campaign creation",
      active: true,
    },
    {
      name: "Pro",
      price: "₹999",
      desc: "For growing businesses",
      active: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ef] text-[#111111] overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full bg-violet-300/30 blur-3xl" />
        <div className="absolute right-[-120px] top-[220px] h-[420px] w-[420px] rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="absolute bottom-[-180px] left-1/2 h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-black/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f4ef]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black text-white shadow-lg shadow-black/20">
              <span className="text-lg font-black">A</span>
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight">AdGenie AI</h1>
              <p className="text-[11px] font-medium text-black/50">
                AI Marketing Workspace
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-semibold text-black/60 hover:text-black">
              Features
            </a>
            <a href="#pricing" className="text-sm font-semibold text-black/60 hover:text-black">
              Pricing
            </a>
            <a href="#reviews" className="text-sm font-semibold text-black/60 hover:text-black">
              Reviews
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden rounded-full px-5 py-2 text-sm font-bold text-black/70 transition hover:bg-black/5 sm:block"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#242424]"
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-black text-black shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            AI workspace for small businesses
          </div>

          <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-black md:text-7xl">
            Create ads that look ready to sell.
          </h2>

          <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-black/60">
            Generate captions, hashtags, WhatsApp campaigns and poster ideas in
            one clean dashboard.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/register"
              className="rounded-2xl bg-black px-7 py-4 text-center text-sm font-black text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:bg-[#262626]"
            >
              Start Free
            </Link>
            <Link
              to="/login"
              className="rounded-2xl border border-black/10 bg-white/80 px-7 py-4 text-center text-sm font-black text-black shadow-sm transition hover:-translate-y-1 hover:bg-white"
            >
              Login
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["JWT Auth", "Analytics", "Reports"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-black text-black/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Card */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-black/20 via-violet-400/20 to-emerald-400/20 blur-2xl" />

          <div className="relative rounded-[2rem] border border-black/10 bg-white/75 p-4 shadow-2xl shadow-black/15 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#101114] p-5 text-white">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-white/50">
                    AdGenie Workspace
                  </p>
                  <h3 className="mt-1 text-xl font-black">Campaign Studio</h3>
                </div>
                <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-black">
                  Live
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Captions", "128"],
                  ["Hashtags", "82"],
                  ["WhatsApp", "41"],
                  ["Reports", "16"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <p className="text-xs font-bold text-white/40">{label}</p>
                    <p className="mt-2 text-3xl font-black">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl bg-white p-5 text-black">
                <p className="text-xs font-black text-black/40">
                  Recent Campaign
                </p>
                <h4 className="mt-2 text-lg font-black">
                  Product launch captions ready
                </h4>
                <div className="mt-4 h-2 rounded-full bg-black/10">
                  <div className="h-2 w-[78%] rounded-full bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-black/40">
              Features
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
              Everything for daily ads.
            </h2>
          </div>
          <p className="max-w-md text-sm font-medium leading-6 text-black/55">
            Simple tools designed for fast campaign creation.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={item}
              className="group rounded-[1.7rem] border border-black/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/10"
            >
              <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-black text-white">
                <span className="text-sm font-black">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-black tracking-tight">{item}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-black/55">
                Clean, fast and ready for your next campaign.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-black/40">
            Pricing
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
            Simple plans.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[2rem] border p-7 transition hover:-translate-y-1 ${
                plan.active
                  ? "border-black bg-black text-white shadow-2xl shadow-black/25"
                  : "border-black/10 bg-white/75 text-black shadow-sm hover:shadow-xl hover:shadow-black/10"
              }`}
            >
              {plan.active && (
                <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-black text-black">
                  Popular
                </span>
              )}

              <h3 className="text-lg font-black">{plan.name}</h3>
              <p
                className={`mt-2 text-sm font-medium ${
                  plan.active ? "text-white/55" : "text-black/50"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-black tracking-[-0.05em]">
                  {plan.price}
                </span>
                <span
                  className={`mb-2 text-sm font-bold ${
                    plan.active ? "text-white/45" : "text-black/45"
                  }`}
                >
                  /month
                </span>
              </div>

              <div className="mt-8 space-y-3 text-sm font-bold">
                <p>✓ Campaign generation</p>
                <p>✓ Reports dashboard</p>
                <p>✓ Brand profile</p>
              </div>

              <Link
                to="/register"
                className={`mt-8 block rounded-2xl px-5 py-4 text-center text-sm font-black transition ${
                  plan.active
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black text-white hover:bg-[#242424]"
                }`}
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8 text-center shadow-sm md:p-12">
          <p className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em]">
            “Made for owners who want faster marketing without complicated tools.”
          </p>
          <p className="mt-5 text-sm font-black text-black/40">
            AdGenie AI Workspace
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-8 text-center">
        <p className="text-sm font-bold text-black/45">
          © 2026 AdGenie AI — Built by Shahil Sharma
        </p>
      </footer>
    </div>
  );
}