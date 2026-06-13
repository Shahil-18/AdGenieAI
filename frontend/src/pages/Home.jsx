import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      number: "01",
      title: "AI Captions",
      desc: "Generate clear ad copy for products, offers and launches.",
    },
    {
      number: "02",
      title: "Hashtags",
      desc: "Create useful hashtag sets for campaigns and social posts.",
    },
    {
      number: "03",
      title: "WhatsApp Ads",
      desc: "Write short customer-friendly WhatsApp campaign messages.",
    },
    {
      number: "04",
      title: "Poster Prompts",
      desc: "Get modern poster ideas for products and promotions.",
    },
    {
      number: "05",
      title: "Analytics",
      desc: "Track campaigns, activity and marketing performance.",
    },
    {
      number: "06",
      title: "Brand Profile",
      desc: "Save your brand voice, audience, colors and business details.",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "₹0",
      desc: "Start creating with AdGenie AI",
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
    <div className="relative min-h-screen overflow-hidden bg-[#f6f4ef] text-[#111111]">
      {/* Dynamic Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.045]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="blob-drift absolute left-[-220px] top-[-160px] h-[560px] w-[560px] rounded-full bg-violet-400/25 blur-[120px]" />
        <div className="blob-drift absolute right-[-220px] top-[240px] h-[560px] w-[560px] rounded-full bg-emerald-400/25 blur-[120px]" />
        <div className="absolute bottom-[-260px] left-[28%] h-[650px] w-[650px] rounded-full bg-black/10 blur-[160px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-white/60 shadow-sm backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black text-white shadow-xl shadow-black/20">
              <span className="text-lg font-black">A</span>
            </div>

            <div>
              <h1 className="text-base font-black tracking-[-0.03em]">
                AdGenie AI
              </h1>
              <p className="text-[11px] font-bold text-black/45">
                AI Marketing Workspace
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-extrabold text-black/55 transition hover:text-black"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-extrabold text-black/55 transition hover:text-black"
            >
              Pricing
            </a>
            <a
              href="#reviews"
              className="text-sm font-extrabold text-black/55 transition hover:text-black"
            >
              Reviews
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden rounded-full px-5 py-2 text-sm font-black text-black/70 transition hover:bg-black/5 sm:block"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-black text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#242424]"
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 lg:grid-cols-[1.03fr_0.97fr] lg:pt-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs font-black text-black shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            AI workspace for small businesses
          </div>

          <h2 className="max-w-4xl text-[3.7rem] font-black leading-[0.88] tracking-[-0.085em] text-black md:text-[6rem] lg:text-[6.8rem]">
            Create marketing that converts.
          </h2>

          <p className="mt-8 max-w-xl text-base font-semibold leading-8 text-black/58 md:text-lg">
            Generate captions, hashtags, WhatsApp campaigns and poster ideas in
            one clean workspace.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/register"
              className="rounded-2xl bg-black px-8 py-4 text-center text-sm font-black text-white shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#262626]"
            >
              Start Creating →
            </Link>

            <Link
              to="/login"
              className="rounded-2xl border border-black/10 bg-white/80 px-8 py-4 text-center text-sm font-black text-black shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white"
            >
              Login
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-5">
            <div>
              <h3 className="text-3xl font-black tracking-[-0.05em]">10k+</h3>
              <p className="mt-1 text-xs font-bold text-black/45">
                AI Outputs
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black tracking-[-0.05em]">500+</h3>
              <p className="mt-1 text-xs font-bold text-black/45">
                Businesses
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black tracking-[-0.05em]">98%</h3>
              <p className="mt-1 text-xs font-bold text-black/45">
                Satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Hero Dashboard */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.7rem] bg-gradient-to-br from-black/20 via-violet-400/25 to-emerald-400/25 blur-3xl" />

          <div className="float-card relative rounded-[2.2rem] border border-black/10 bg-white/75 p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="rounded-[1.7rem] bg-[#101114] p-5 text-white">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-white/45">
                    AdGenie Workspace
                  </p>
                  <h3 className="mt-1 text-xl font-black tracking-[-0.04em]">
                    Campaign Studio
                  </h3>
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
                    <p className="text-xs font-black text-white/40">{label}</p>
                    <p className="mt-2 text-3xl font-black tracking-[-0.06em]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl bg-white p-5 text-black">
                <p className="text-xs font-black text-black/40">
                  Recent Campaign
                </p>
                <h4 className="mt-2 text-lg font-black tracking-[-0.04em]">
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

      {/* Moving Strip */}
      <section className="border-y border-black/10 bg-black py-4 text-white">
        <div className="overflow-hidden">
          <div className="marquee-track flex w-[200%] gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.18em] text-white/70">
            {[
              "AI Captions",
              "WhatsApp Campaigns",
              "Poster Prompts",
              "Brand Profile",
              "Analytics",
              "Hashtag Sets",
              "AI Captions",
              "WhatsApp Campaigns",
              "Poster Prompts",
              "Brand Profile",
              "Analytics",
              "Hashtag Sets",
            ].map((item, index) => (
              <span key={`${item}-${index}`}>✦ {item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-black/35">
              Features
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-5xl">
              Everything for daily ads.
            </h2>
          </div>

          <p className="max-w-md text-sm font-bold leading-6 text-black/45">
            Simple tools designed for fast campaign creation.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-[1.7rem] border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/10"
            >
              <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-black text-xs font-black text-white">
                {item.number}
              </div>

              <h3 className="text-xl font-black tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm font-semibold leading-6 text-black/50">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-black/35">
            Pricing
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-5xl">
            Simple plans.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[2rem] border p-7 transition hover:-translate-y-1 ${
                plan.active
                  ? "border-black bg-black text-white shadow-2xl shadow-black/25"
                  : "border-black/10 bg-white/75 text-black shadow-sm backdrop-blur-xl hover:shadow-xl hover:shadow-black/10"
              }`}
            >
              {plan.active && (
                <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-black text-black">
                  Popular
                </span>
              )}

              <h3 className="text-lg font-black">{plan.name}</h3>

              <p
                className={`mt-2 text-sm font-bold ${
                  plan.active ? "text-white/55" : "text-black/45"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-black tracking-[-0.07em]">
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

              <div className="mt-8 space-y-3 text-sm font-black">
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

      {/* Review */}
      <section id="reviews" className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8 text-center shadow-sm backdrop-blur-xl md:p-14">
          <p className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-[-0.06em] md:text-4xl">
            “Made for owners who want faster marketing without complicated tools.”
          </p>

          <p className="mt-6 text-sm font-black text-black/35">
            AdGenie AI Workspace
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 px-5 py-8 text-center">
        <p className="text-sm font-bold text-black/45">
          © 2026 AdGenie AI — Built by Shahil Sharma
        </p>
      </footer>
    </div>
  );
}