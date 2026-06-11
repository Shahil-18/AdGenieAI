import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

function AuthLayout({ title, subtitle, children, type }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-violet-700 to-cyan-600">
        <Link to="/" className="flex items-center gap-2 text-2xl font-black">
          <Sparkles />
          AdGenie AI
        </Link>

        <div>
          <h1 className="text-5xl font-black leading-tight">
            Create smarter ads for every business.
          </h1>
          <p className="text-white/80 mt-5 text-lg">
            Captions, hashtags, posters and WhatsApp campaigns powered by AI.
          </p>
        </div>

        <p className="text-white/70">Built for modern small businesses.</p>
      </div>

      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden flex items-center gap-2 text-2xl font-black mb-10">
            <Sparkles />
            AdGenie AI
          </Link>

          <h2 className="text-4xl font-black">{title}</h2>
          <p className="text-slate-400 mt-3">{subtitle}</p>

          <div className="mt-8">{children}</div>

          <p className="text-slate-400 text-center mt-8">
            {type === "login" ? "New here?" : "Already have an account?"}{" "}
            <Link
              to={type === "login" ? "/register" : "/login"}
              className="text-violet-400 font-bold"
            >
              {type === "login" ? "Create account" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;