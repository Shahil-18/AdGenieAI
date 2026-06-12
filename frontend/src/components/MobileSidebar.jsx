import { Link, useLocation } from "react-router-dom";
import {
  X,
  LayoutDashboard,
  BriefcaseBusiness,
  FileBarChart,
  Building2,
  Sparkles,
  Hash,
  MessageCircle,
  Image,
  History,
  CreditCard,
  Settings,
  ShieldCheck,
} from "lucide-react";

function MobileSidebar({ open, onClose, business }) {
  const location = useLocation();

  const navItems = [
    { name: "Overview", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Workspace", path: "/workspace", icon: <BriefcaseBusiness size={18} /> },
    { name: "Reports", path: "/reports", icon: <FileBarChart size={18} /> },
    { name: "Business Profile", path: "/business", icon: <Building2 size={18} /> },
    { name: "Captions", path: "/caption-generator", icon: <Sparkles size={18} /> },
    { name: "Hashtags", path: "/hashtag-generator", icon: <Hash size={18} /> },
    { name: "WhatsApp", path: "/whatsapp-generator", icon: <MessageCircle size={18} /> },
    { name: "Poster", path: "/poster-generator", icon: <Image size={18} /> },
    { name: "History", path: "/campaign-history", icon: <History size={18} /> },
    { name: "Billing", path: "/billing", icon: <CreditCard size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
    { name: "Admin", path: "/admin", icon: <ShieldCheck size={18} /> },
  ];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <aside className="absolute left-0 top-0 h-full w-[84%] max-w-[340px] bg-[#0f1117] text-white p-4 overflow-y-auto">
        <div className="h-14 flex items-center justify-between border-b border-white/10 pb-4">
          <Link to="/dashboard" onClick={onClose} className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-white text-[#0f1117] overflow-hidden flex items-center justify-center font-bold">
              {business?.logoUrl ? (
                <img src={business.logoUrl} alt="Logo" className="w-full h-full object-cover" />
              ) : (
                business?.businessName?.charAt(0) || "A"
              )}
            </div>

            <div className="min-w-0">
              <h1 className="text-sm font-semibold truncate">
                {business?.businessName || "AdGenie AI"}
              </h1>
              <p className="text-xs text-slate-400 truncate">
                {business?.industry || "Marketing Suite"}
              </p>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="py-4 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`h-11 flex items-center gap-3 px-3 rounded-md text-sm font-medium border-l-2 ${
                  active
                    ? "bg-[#2563eb]/10 text-[#60a5fa] border-[#2563eb]"
                    : "border-transparent text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}

export default MobileSidebar;