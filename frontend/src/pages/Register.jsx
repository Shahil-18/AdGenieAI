import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(form);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f4ef] px-5 py-10 text-black">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-8 lg:grid-cols-2">
        <section className="rounded-[2rem] bg-black p-8 text-white shadow-2xl shadow-black/20">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-white/40">Start Free</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.06em]">
            Build your AI-powered ad system.
          </h1>
          <p className="mt-5 text-sm font-semibold leading-7 text-white/50">
            One dashboard for captions, hashtags, WhatsApp campaigns and brand content.
          </p>
        </section>

        <section className="rounded-[2rem] border border-black/10 bg-white/75 p-7 shadow-xl shadow-black/10">
          <h2 className="text-3xl font-black tracking-tight">Create Account</h2>

          {error && (
            <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
            />

            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="rounded-2xl border border-black/10 bg-[#f6f4ef] px-5 py-4 text-sm font-bold outline-none focus:border-black"
            />

            <button className="rounded-2xl bg-black px-6 py-4 text-sm font-black text-white hover:bg-[#262626]">
              Create Account
            </button>
          </form>

          <p className="mt-5 text-center text-sm font-bold text-black/50">
            Already have account?{" "}
            <Link to="/login" className="text-black underline">
              Login
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}