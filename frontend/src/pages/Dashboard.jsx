import { Link } from "react-router-dom";

export default function Dashboard() {
  const stats = [
    ["Campaigns", "128"],
    ["AI Generations", "82"],
    ["Reports", "16"],
    ["Brand Ready", "92%"],
  ];

  const quickActions = [
    ["/captions", "Generate Caption", "Create sales-ready ad copy.", "✦"],
    ["/hashtags", "Generate Hashtags", "Get targeted hashtag sets.", "#"],
    ["/whatsapp", "WhatsApp Campaign", "Write customer-friendly messages.", "✉"],
    ["/business-profile", "Poster Prompt", "Create premium poster ideas.", "▣"],
  ];

  const recent = [
    ["Caption generated for product launch", "2 mins ago"],
    ["WhatsApp campaign created", "15 mins ago"],
    ["Hashtag set prepared", "Yesterday"],
  ];

  return (
    <div className="w-full space-y-8 overflow-hidden">
      <section className="rounded-[2rem] bg-black p-6 text-white shadow-2xl shadow-black/20 md:p-8">
        <p className="text-sm font-black text-white/45">AdGenie AI Dashboard</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-[-0.06em] md:text-5xl">
          Let’s create something that sells.
        </h1>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(([label, value]) => (
            <div
              key={label}
              className="min-w-0 rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5"
            >
              <p className="text-sm font-black text-white/40">{label}</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
                {value}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-black tracking-[-0.04em]">
          Quick Actions
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map(([path, title, desc, icon]) => (
            <Link
              key={title}
              to={path}
              className="rounded-[2rem] border border-white/50 bg-white/65 p-6 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/85 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-black text-lg font-black text-white">
                {icon}
              </div>

              <h3 className="mt-8 text-xl font-black tracking-[-0.04em]">
                {title}
              </h3>

              <p className="mt-3 text-sm font-semibold leading-6 text-black/50">
                {desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/50 bg-white/65 p-6 shadow-sm backdrop-blur-2xl md:p-7">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-black/35">
            AI Workspace
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em]">
            What do you want to sell?
          </h2>

          <div className="mt-6 grid gap-4">
            <input
              placeholder="Product name"
              className="w-full rounded-2xl border border-black/10 bg-white/65 px-5 py-4 text-sm font-bold outline-none backdrop-blur-xl focus:border-black"
            />

            <textarea
              placeholder="Add offer, audience, tone..."
              className="min-h-32 w-full rounded-2xl border border-black/10 bg-white/65 px-5 py-4 text-sm font-bold outline-none backdrop-blur-xl focus:border-black"
            />

            <button className="rounded-2xl bg-black px-6 py-4 text-sm font-black text-white shadow-xl shadow-black/20 transition hover:-translate-y-1">
              Generate Campaign
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/50 bg-white/65 p-6 shadow-sm backdrop-blur-2xl md:p-7">
          <h2 className="text-3xl font-black tracking-[-0.05em]">
            Recent Activity
          </h2>

          <div className="mt-6 space-y-3">
            {recent.map(([title, time]) => (
              <div
                key={title}
                className="rounded-2xl bg-white/60 p-4 backdrop-blur-xl"
              >
                <p className="text-sm font-black">{title}</p>
                <p className="mt-1 text-xs font-bold text-black/40">{time}</p>
              </div>
            ))}
          </div>

          <Link
            to="/business-profile"
            className="mt-5 block rounded-2xl border border-black/10 bg-white/55 px-5 py-4 text-center text-sm font-black transition hover:bg-black hover:text-white"
          >
            Complete Brand Profile
          </Link>
        </div>
      </section>
    </div>
  );
}