import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";
import { Sparkles } from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      await registerUser(formData);
      navigate("/login");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] grid lg:grid-cols-2">
      <div className="hidden lg:flex bg-[#0f1117] text-white p-12 flex-col justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white text-[#0f1117] rounded-lg flex items-center justify-center">
            <Sparkles size={20} />
          </div>
          <span className="font-semibold">AdGenie AI</span>
        </Link>

        <div>
          <h1 className="text-4xl font-bold tracking-[-0.03em] leading-tight">
            Build your marketing workspace in minutes.
          </h1>
          <p className="text-slate-400 mt-4 leading-7">
            Create campaigns, organize brand identity, and generate AI marketing assets.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md card p-8">
          <h1 className="page-title">Create account</h1>
          <p className="page-subtitle mt-2">Start using AdGenie AI today.</p>

          {message && (
            <div className="mt-5 border border-[#fee2e2] bg-[#fef2f2] text-[#dc2626] rounded-lg p-3 text-sm font-medium">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div>
              <label className="text-sm font-medium block mb-2">Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="input-modern"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="input-modern"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="input-modern"
                placeholder="••••••••"
              />
            </div>

            <button disabled={loading} className="btn-primary w-full">
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="text-sm text-[#6b7280] mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#2563eb] font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;