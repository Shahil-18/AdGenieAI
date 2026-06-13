import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(form);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fbf7ef] text-black">
      {/* Dynamic Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#fbf7ef]" />
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />
        <div className="aurora aurora-four" />
        <div className="noise-layer" />

        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="spark-dot"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${8 + (i % 7)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[2.8rem] border border-white/50 bg-white/55 shadow-2xl shadow-black/15 backdrop-blur-2xl lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Branding */}
          <section className="relative hidden min-h-[680px] overflow-hidden bg-black p-10 text-white lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.55),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(16,185,129,0.45),transparent_36%),linear-gradient(135deg,#090909,#191919)]" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <Link to="/" className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl font-black text-black">
                  A
                </div>
                <div>
                  <h1 className="text-xl font-black tracking-[-0.04em]">
                    AdGenie AI
                  </h1>
                  <p className="text-xs font-bold text-white/40">
                    AI Creative Studio
                  </p>
                </div>
              </Link>

              <div>
                <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-black text-white/60">
                  Ads • Captions • Posters • Video Posts
                </div>

                <h2 className="max-w-xl text-6xl font-black leading-[0.9] tracking-[-0.08em]">
                  Welcome back to your campaign studio.
                </h2>

                <p className="mt-6 max-w-md text-sm font-semibold leading-7 text-white/50">
                  Continue creating brand content, ad ideas, captions and
                  campaign messages with a premium AI workflow.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  ["500+", "Captions"],
                  ["80+", "Hashtags"],
                  ["40+", "Campaigns"],
                ].map(([num, label]) => (
                  <div
                    key={label}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.08] p-4"
                  >
                    <h3 className="text-2xl font-black">{num}</h3>
                    <p className="mt-1 text-xs font-bold text-white/35">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Login Form */}
          <section className="p-6 sm:p-10">
            <div className="mb-10 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 lg:hidden">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black text-white">
                  <span className="font-black">A</span>
                </div>
                <div>
                  <h1 className="font-black">AdGenie AI</h1>
                  <p className="text-xs font-bold text-black/40">
                    AI Creative Studio
                  </p>
                </div>
              </Link>

              <Link
                to="/"
                className="ml-auto rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-black text-black/60 backdrop-blur-xl hover:bg-white"
              >
                Back Home
              </Link>
            </div>

            <div className="mx-auto max-w-md">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-black/35">
                Login
              </p>

              <h2 className="mt-3 text-5xl font-black tracking-[-0.08em]">
                Access your workspace.
              </h2>

              <p className="mt-4 text-sm font-semibold leading-6 text-black/50">
                Enter your details to continue building campaigns.
              </p>

              {error && (
                <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-bold text-red-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-black/35">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-sm font-bold outline-none backdrop-blur-xl transition focus:border-black focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-black/35">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-sm font-bold outline-none backdrop-blur-xl transition focus:border-black focus:bg-white"
                  />
                </div>

                <button
                  disabled={loading}
                  className="w-full rounded-2xl bg-black px-6 py-4 text-sm font-black text-white shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#242424] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Logging in..." : "Login to Dashboard →"}
                </button>
              </form>

              <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-white/55 p-4 backdrop-blur-xl">
                <p className="text-center text-sm font-bold text-black/50">
                  New to AdGenie AI?{" "}
                  <Link to="/register" className="font-black text-black underline">
                    Create account
                  </Link>
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {["Secure", "Fast", "AI Powered"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/10 bg-white/50 px-3 py-3 text-xs font-black text-black/45 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}