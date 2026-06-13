import { Link } from "react-router-dom";

export default function Home() {
  const tools = [
    ["Ad Designer", "Create premium ad concepts for products and offers.", "✦"],
    ["Caption Generator", "Write platform-ready captions instantly.", "✍"],
    ["Video Post Generator", "Generate reels, shorts and promo video ideas.", "▶"],
    ["WhatsApp Campaigns", "Create direct customer sales messages.", "☏"],
    ["Poster Ideas", "Get clean poster direction for campaigns.", "▣"],
    ["Brand Workspace", "Keep tone, audience and style consistent.", "◆"],
  ];

  const platforms = [
    "Instagram",
    "Facebook",
    "WhatsApp",
    "YouTube",
    "LinkedIn",
    "Google Ads",
  ];

  const plans = [
    ["Free", "₹0", "Start creating"],
    ["Starter", "₹299", "For daily creators"],
    ["Pro", "₹999", "For growing brands"],
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fbf7ef] text-black">
      {/* Dynamic Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#fbf7ef]" />
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />
        <div className="aurora aurora-four" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(251,247,239,0.25)_42%,rgba(251,247,239,0.92)_100%)]" />
        <div className="noise-layer" />

        {[...Array(22)].map((_, i) => (
          <span
            key={i}
            className="spark-dot"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 19) % 100}%`,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${8 + (i % 7)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 border-b border-black/10 bg-white/45 shadow-sm backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black text-white shadow-xl shadow-black/20">
                <span className="text-lg font-black">A</span>
              </div>

              <div>
                <h1 className="text-lg font-black tracking-[-0.04em]">
                  AdGenie AI
                </h1>
                <p className="text-xs font-bold text-black/45">
                  AI Creative Studio
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#tools"
                className="text-sm font-black text-black/55 hover:text-black"
              >
                Tools
              </a>
              <a
                href="#workflow"
                className="text-sm font-black text-black/55 hover:text-black"
              >
                Workflow
              </a>
              <a
                href="#pricing"
                className="text-sm font-black text-black/55 hover:text-black"
              >
                Pricing
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/login" className="hidden text-sm font-black sm:block">
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-full bg-black px-6 py-3 text-sm font-black text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5"
              >
                Start Free
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-xs font-black shadow-sm backdrop-blur-2xl">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              AI studio for ads, captions, posters and video posts
            </div>

            <h1 className="max-w-4xl text-[3.7rem] font-black leading-[0.88] tracking-[-0.095em] md:text-[6.9rem]">
              Create campaigns that feel alive.
            </h1>

            <p className="mt-8 max-w-xl text-lg font-semibold leading-8 text-black/62">
              Generate ad concepts, captions, poster ideas, WhatsApp campaigns
              and video post plans from one premium creative workspace.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="rounded-2xl bg-black px-8 py-4 text-center text-sm font-black text-white shadow-2xl shadow-black/20 transition hover:-translate-y-1"
              >
                Start Creating →
              </Link>

              <Link
                to="/login"
                className="rounded-2xl border border-black/10 bg-white/60 px-8 py-4 text-center text-sm font-black shadow-sm backdrop-blur-xl transition hover:-translate-y-1"
              >
                Open Workspace
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5">
              {[
                ["10k+", "AI Outputs"],
                ["250+", "Brands"],
                ["98%", "Satisfaction"],
              ].map(([title, text]) => (
                <div key={title}>
                  <h3 className="text-3xl font-black tracking-[-0.06em]">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-black/45">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Preview */}
          <div className="relative min-h-[620px]">
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-3xl" />
            <div className="creative-orbit absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40" />

            <div className="absolute left-0 top-10 w-[430px] rounded-[2.8rem] border border-white/50 bg-white/55 p-5 shadow-2xl shadow-black/15 backdrop-blur-2xl md:left-12">
              <div className="overflow-hidden rounded-[2.2rem] bg-black p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black text-white/40">
                      AdGenie Creative Studio
                    </p>
                    <h3 className="mt-1 text-2xl font-black tracking-[-0.06em]">
                      Campaign generated
                    </h3>
                  </div>
                  <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-black">
                    Live
                  </span>
                </div>

                <div className="mt-6 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.85),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.75),transparent_35%),linear-gradient(135deg,#121212,#2b2b2b)] p-6">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-black">
                    PRODUCT LAUNCH
                  </span>

                  <h2 className="mt-20 text-5xl font-black leading-none tracking-[-0.08em]">
                    Premium ad visual ready.
                  </h2>
                </div>

                <div className="mt-5 rounded-[1.5rem] bg-white p-4 text-black">
                  <p className="text-sm font-black">
                    Caption: Turn attention into action with one strong offer.
                  </p>
                  <p className="mt-2 text-xs font-bold text-black/45">
                    #brandgrowth #adcreative #socialselling
                  </p>
                </div>
              </div>
            </div>

            <div className="floating-card absolute right-2 top-8 w-[260px] rounded-[2rem] bg-black p-5 text-white shadow-2xl shadow-black/25">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black text-white/40">Video Post</p>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-black text-black">
                  ▶
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black leading-tight tracking-[-0.06em]">
                Reel hook and scene flow generated.
              </h3>
            </div>

            <div className="floating-card-2 absolute bottom-20 right-8 w-[300px] rounded-[2rem] border border-white/50 bg-white/70 p-5 shadow-2xl shadow-black/15 backdrop-blur-2xl">
              <p className="text-xs font-black text-black/35">
                WhatsApp Campaign
              </p>
              <h3 className="mt-2 text-xl font-black tracking-[-0.05em]">
                Customer message ready.
              </h3>
              <p className="mt-4 rounded-2xl bg-emerald-100 px-4 py-4 text-sm font-bold leading-6 text-black/70">
                Hi 👋 Your new offer is live. Reply YES to know more.
              </p>
            </div>

            <div className="floating-card-3 absolute bottom-4 left-0 w-[270px] rounded-[2rem] border border-white/50 bg-white/70 p-5 shadow-2xl shadow-black/15 backdrop-blur-2xl">
              <p className="text-xs font-black text-black/35">Brand System</p>
              <h3 className="mt-2 text-xl font-black tracking-[-0.05em]">
                Tone, colors and format saved.
              </h3>
              <div className="mt-5 flex gap-2">
                <span className="h-8 w-8 rounded-full bg-black" />
                <span className="h-8 w-8 rounded-full bg-violet-500" />
                <span className="h-8 w-8 rounded-full bg-emerald-500" />
                <span className="h-8 w-8 rounded-full bg-orange-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Stats */}
        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="rounded-[2.5rem] border border-white/50 bg-white/55 p-8 shadow-xl backdrop-blur-2xl">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                ["30 sec", "Average campaign generation"],
                ["5+", "Social platforms supported"],
                ["24/7", "AI generation available"],
                ["100%", "Brand customization"],
              ].map(([num, text]) => (
                <div key={num}>
                  <h2 className="text-5xl font-black tracking-[-0.06em]">
                    {num}
                  </h2>
                  <p className="mt-2 text-sm font-bold text-black/45">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Strip */}
        <section className="pb-24">
          <p className="text-center text-xs font-black uppercase tracking-[0.35em] text-black/35">
            Create content for
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 px-5">
            {platforms.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/50 bg-white/55 px-6 py-3 text-sm font-black shadow-sm backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Tool Strip */}
        <section className="border-y border-black/10 bg-black/90 py-5 text-white backdrop-blur-2xl">
          <div className="flex flex-wrap justify-center gap-4 px-5">
            {[
              "Ad Design",
              "Captions",
              "Poster Prompts",
              "Video Posts",
              "WhatsApp Campaigns",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.08] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white/70"
              >
                ✦ {item}
              </span>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="mx-auto max-w-7xl px-5 py-24">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-black/35">
                Creative Tools
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-5xl">
                One workspace. Every format.
              </h2>
            </div>
            <p className="max-w-md text-sm font-bold text-black/45">
              From ad concept to caption to video post, everything stays on-brand.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map(([title, text, icon]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-white/50 bg-white/60 p-7 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl hover:shadow-black/10"
              >
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-black text-lg font-black text-white">
                  {icon}
                </div>
                <h3 className="text-xl font-black tracking-[-0.04em]">
                  {title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/50">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[2.8rem] bg-black p-8 text-white shadow-2xl shadow-black/20 md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/35">
              Workflow
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.06em] md:text-6xl">
              One product idea becomes a full campaign.
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                ["01", "Product"],
                ["02", "Caption"],
                ["03", "Ad Visual"],
                ["04", "Video Post"],
              ].map(([num, title]) => (
                <div
                  key={title}
                  className="rounded-[1.8rem] border border-white/10 bg-white/[0.07] p-5"
                >
                  <p className="text-xs font-black text-white/35">{num}</p>
                  <h3 className="mt-4 text-xl font-black">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why AdGenie */}
        <section className="mx-auto max-w-7xl px-5 py-24">
          <div className="overflow-hidden rounded-[3rem] bg-black p-10 text-white shadow-2xl shadow-black/20 md:p-14">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/35">
              Why AdGenie AI
            </p>

            <h2 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.07em] md:text-6xl">
              One product becomes a complete marketing campaign.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/55">
              Generate captions, ad concepts, WhatsApp campaigns and video post
              ideas without switching tools.
            </p>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                [
                  "✦",
                  "Ad Design",
                  "Product visuals, posters and campaign concepts generated instantly.",
                ],
                [
                  "✍",
                  "Captions",
                  "Platform-ready captions optimized for engagement and conversions.",
                ],
                [
                  "▶",
                  "Video Posts",
                  "Reels, Shorts and promotional video concepts generated instantly.",
                ],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl"
                >
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-xl font-black text-black">
                    {icon}
                  </div>
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-white/55">{text}</p>
                </div>
              ))}
            </div>
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
            {plans.map(([name, price, desc], index) => {
              const active = index === 1;

              return (
                <div
                  key={name}
                  className={`relative rounded-[2rem] border p-7 transition hover:-translate-y-1 ${
                    active
                      ? "border-black bg-black text-white shadow-2xl shadow-black/25"
                      : "border-white/50 bg-white/60 text-black shadow-sm backdrop-blur-2xl"
                  }`}
                >
                  {active && (
                    <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-black text-black">
                      Popular
                    </span>
                  )}

                  <h3 className="text-lg font-black">{name}</h3>
                  <p
                    className={`mt-2 text-sm font-bold ${
                      active ? "text-white/55" : "text-black/45"
                    }`}
                  >
                    {desc}
                  </p>

                  <div className="mt-8 flex items-end gap-2">
                    <span className="text-5xl font-black tracking-[-0.07em]">
                      {price}
                    </span>
                    <span className="mb-2 text-sm font-bold opacity-50">
                      /month
                    </span>
                  </div>

                  <div className="mt-8 space-y-3 text-sm font-black">
                    <p>✓ Ad post generation</p>
                    <p>✓ Caption generation</p>
                    <p>✓ Video post ideas</p>
                  </div>

                  <Link
                    to="/register"
                    className={`mt-8 block rounded-2xl px-5 py-4 text-center text-sm font-black ${
                      active ? "bg-white text-black" : "bg-black text-white"
                    }`}
                  >
                    Choose Plan
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <footer className="border-t border-black/10 px-5 py-8 text-center">
          <p className="text-sm font-bold text-black/45">
            © 2026 AdGenie AI — Built by Shahil Sharma
          </p>
        </footer>
      </div>
    </div>
  );
}