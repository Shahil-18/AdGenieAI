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

      <aside className="absolute left-0 top-0 h-full w-[82%] max-w-[340px] bg-white border-r border-[#e5e7eb] p-6 overflow-y-auto">
        <div className="flex items-center justify-between">
          <Link to="/dashboard" onClick={onClose} className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#111827] text-white overflow-hidden flex items-center justify-center font-black">
              {business?.logoUrl ? (
                <img src={business.logoUrl} className="w-full h-full object-cover" />
              ) : (
                business?.businessName?.charAt(0) || "A"
              )}
            </div>

            <div>
              <h1 className="font-black text-[#111827]">
                {business?.businessName || "AdGenie AI"}
              </h1>
              <p className="text-xs text-[#6b7280]">
                {business?.industry || "Marketing Suite"}
              </p>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="w-10 h-10 border border-[#e5e7eb] rounded-xl flex items-center justify-center"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-8 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold ${
                  active
                    ? "bg-[#111827] text-white"
                    : "text-[#4b5563] hover:bg-[#f3f4f6]"
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