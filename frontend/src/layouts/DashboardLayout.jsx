import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getBusiness } from "../api/businessApi";
import {
  LayoutDashboard,
  Building2,
  Sparkles,
  Hash,
  MessageCircle,
  Image,
  History,
  CreditCard,
  Settings,
  BriefcaseBusiness,
  FileBarChart,
  ShieldCheck,
  Menu,
} from "lucide-react";
import UserMenu from "../components/UserMenu";
import SearchBar from "../components/SearchBar";
import MobileSidebar from "../components/MobileSidebar";

function DashboardLayout({ children }) {
  const location = useLocation();
  const [business, setBusiness] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    loadBusiness();
  }, []);

  const loadBusiness = async () => {
    try {
      const res = await getBusiness();
      setBusiness(res.data.business);
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111827] flex">
      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        business={business}
      />

      <aside className="hidden xl:flex w-[280px] bg-[#0f1117] text-white fixed h-screen flex-col">
        <div className="h-[72px] px-6 flex items-center border-b border-white/10">
          <Link to="/dashboard" className="flex items-center gap-3 min-w-0">
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
        </div>

        <nav className="px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`h-11 flex items-center gap-3 px-3 rounded-md text-sm font-medium border-l-2 ${
                  active
                    ? "bg-[#2563eb]/10 text-[#60a5fa] border-[#2563eb]"
                    : "border-transparent text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-4 border-t border-white/10">
          <div className="rounded-lg border border-white/10 p-4">
            <p className="text-sm font-semibold">Free Workspace</p>
            <p className="text-xs text-slate-400 mt-1">
              Upgrade for exports and advanced usage.
            </p>
            <Link to="/billing" className="btn-primary block text-center mt-4">
              View plans
            </Link>
          </div>
        </div>
      </aside>

      <main className="xl:ml-[280px] w-full min-h-screen">
        <header className="h-[72px] bg-white border-b border-[#e5e7eb] px-4 sm:px-6 lg:px-8 sticky top-0 z-30 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden w-10 h-10 border border-[#e5e7eb] rounded-lg flex items-center justify-center bg-white hover:bg-[#f9fafb]"
            >
              <Menu size={20} />
            </button>

            <div className="hidden sm:block">
              <SearchBar />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {business?.logoUrl && (
              <img
                src={business.logoUrl}
                alt="Brand"
                className="w-9 h-9 rounded-lg object-cover border border-[#e5e7eb]"
              />
            )}

            <UserMenu />
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;