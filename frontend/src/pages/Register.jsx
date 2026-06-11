import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(formData);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <AuthLayout title="Create account" subtitle="Start your free AdGenie AI workspace." type="register">
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && <p className="bg-red-500/10 border border-red-500/30 text-red-300 p-3 rounded-xl">{error}</p>}

        <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full name" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-violet-500" />

        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email address" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-violet-500" />

        <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-violet-500" />

        <button className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-xl font-bold">
          Create Account
        </button>
      </form>
    </AuthLayout>
  );
}

export default Register;