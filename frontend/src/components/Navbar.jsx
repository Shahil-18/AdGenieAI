import { Link } from "react-router-dom";
import { Sparkles, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white/90 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-black text-slate-900">
          <div className="w-10 h-10 bg-violet-700 text-white rounded-2xl flex items-center justify-center">
            <Sparkles size={22} />
          </div>
          AdGenie AI
        </Link>

        <div className="hidden md:flex items-center gap-8 text-slate-600 font-semibold">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Reviews</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <Link to="/login" className="hidden sm:block font-semibold text-slate-700">
            Login
          </Link>

          <Link to="/register" className="bg-violet-700 text-white px-5 py-3 rounded-xl font-bold">
            Start Free
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;