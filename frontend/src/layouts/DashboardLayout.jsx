import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: "◼" },
    { name: "Captions", path: "/captions", icon: "✦" },
    { name: "Hashtags", path: "/hashtags", icon: "#" },
    { name: "WhatsApp", path: "/whatsapp", icon: "✉" },
    { name: "Business Profile", path: "/business-profile", icon: "◆" },
    { name: "History", path: "/history", icon: "◌" },
    { name: "Reports", path: "/reports", icon: "▣" },
    { name: "Settings", path: "/settings", icon: "⚙" },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#fbf7ef] text-black">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#fbf7ef]" />
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />
        <div className="noise-layer" />
      </div>

      <aside className="fixed left-4 top-4 z-50 hidden h-[calc(100vh-32px)] w-72 flex-col rounded-[2rem] border border-white/50 bg-white/60 p-5 shadow-2xl shadow-black/10 backdrop-blur-2xl lg:flex">
        <div className="flex items-center gap-3 px-2">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black text-lg font-black text-white">
            A
          </div>
          <div>
            <h1 className="text-lg font-black">AdGenie AI</h1>
            <p className="text-xs font-bold text-black/40">
              AI Creative Studio
            </p>
          </div>
        </div>

        <nav className="mt-10 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-black transition ${
                  isActive
                    ? "bg-black text-white shadow-lg shadow-black/20"
                    : "text-black/55 hover:bg-black/5 hover:text-black"
                }`
              }
            >
              <span>{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-[1.5rem] bg-black p-5 text-white">
          <p className="text-sm font-black">Creative Workspace</p>
          <p className="mt-2 text-xs font-semibold leading-5 text-white/45">
            Generate ads, captions, campaigns and video post ideas.
          </p>
          <button
            onClick={logout}
            className="mt-5 w-full rounded-2xl bg-white px-4 py-3 text-sm font-black text-black"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="relative z-10 px-4 py-4 lg:ml-80">
        <div className="mb-4 flex items-center justify-between rounded-[1.5rem] border border-white/50 bg-white/65 px-5 py-4 shadow-sm backdrop-blur-2xl lg:hidden">
          <h1 className="font-black">AdGenie AI</h1>
          <button
            onClick={logout}
            className="rounded-full bg-black px-4 py-2 text-xs font-black text-white"
          >
            Logout
          </button>
        </div>

        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}