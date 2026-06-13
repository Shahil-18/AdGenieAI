import { Link } from "react-router-dom";

export default function Dashboard() {
  const quickActions = [
    { title: "Generate Caption", desc: "Create sales-ready ad copy.", icon: "✦" },
    { title: "Generate Hashtags", desc: "Get targeted hashtag sets.", icon: "#" },
    { title: "WhatsApp Campaign", desc: "Write customer-friendly messages.", icon: "✉" },
    { title: "Poster Prompt", desc: "Create premium poster ideas.", icon: "▣" },
  ];

  const stats = [
    { label: "Campaigns", value: "128" },
    { label: "AI Generations", value: "82" },
    { label: "Reports", value: "16" },
    { label: "Brand Ready", value: "92%" },
  ];

  const recent = [
    "Caption generated for product launch",
    "WhatsApp campaign created",
    "Hashtag set prepared",
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] bg-black p-8 text-white shadow-2xl shadow-black/20">
        <p className="text-sm font-bold text-white/50">AdGenie AI Dashboard</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em]">
          Let’s create something that sells.
        </h1>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.07] p-5">
              <p className="text-sm font-bold text-white/45">{item.label}</p>
              <h2 className="mt-2 text-3xl font-black">{item.value}</h2>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-black tracking-tight">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.7rem] border border-black/10 bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-black text-xl font-black text-white">
                {item.icon}
              </div>
              <h3 className="mt-6 text-lg font-black">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-black/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-black/10 bg-white/75 p-7 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-black/35">AI Workspace</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">What do you want to sell?</h2>

          <div className="mt-6 grid gap-3">
            <input
              className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
              placeholder="Product name"
            />
            <textarea
              className="min-h-32 rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
              placeholder="Add offer, audience, tone..."
            />
            <button className="rounded-2xl bg-black px-6 py-4 text-sm font-black text-white transition hover:bg-[#262626]">
              Generate Campaign
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white/75 p-7 shadow-sm">
          <h2 className="text-2xl font-black">Recent Activity</h2>
          <div className="mt-5 space-y-3">
            {recent.map((item, i) => (
              <div key={item} className="rounded-2xl bg-[#f6f4ef] p-4">
                <p className="text-sm font-black">{item}</p>
                <p className="mt-1 text-xs font-bold text-black/40">
                  {i === 0 ? "2 mins ago" : i === 1 ? "15 mins ago" : "Yesterday"}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/business-profile"
            className="mt-5 block rounded-2xl border border-black/10 px-5 py-4 text-center text-sm font-black hover:bg-black hover:text-white"
          >
            Complete Brand Profile
          </Link>
        </div>
      </section>
    </div>
  );
}