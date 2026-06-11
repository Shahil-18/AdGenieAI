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
    { name: "WhatsApp Campaigns", path: "/whatsapp-generator", icon: <MessageCircle size={18} /> },
    { name: "Poster Generator", path: "/poster-generator", icon: <Image size={18} /> },
    { name: "Campaign History", path: "/campaign-history", icon: <History size={18} /> },
    { name: "Billing", path: "/billing", icon: <CreditCard size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
    { name: "Admin", path: "/admin", icon: <ShieldCheck size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#111827] flex">
      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        business={business}
      />

      <aside className="hidden xl:flex w-[300px] bg-white border-r border-[#e5e7eb] p-7 flex-col fixed h-screen">
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl border border-[#e5e7eb] overflow-hidden bg-[#111827] flex items-center justify-center text-white font-black">
            {business?.logoUrl ? (
              <img
                src={business.logoUrl}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            ) : (
              business?.businessName?.charAt(0) || "A"
            )}
          </div>

          <div className="min-w-0">
            <h1 className="text-xl font-black tracking-tight text-[#111827] truncate">
              {business?.businessName || "AdGenie AI"}
            </h1>
            <p className="text-sm text-[#6b7280] truncate">
              {business?.industry || "Business Marketing Suite"}
            </p>
          </div>
        </Link>

        <div className="mt-8 h-px bg-[#e5e7eb]" />

        <nav className="mt-8 space-y-1 overflow-y-auto pb-4">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  active
                    ? "bg-[#111827] text-white"
                    : "text-[#4b5563] hover:bg-[#f3f4f6] hover:text-[#111827]"
                }`}
              >
                {item.icon}
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="xl:ml-[300px] w-full min-h-screen">
        <header className="bg-white border-b border-[#e5e7eb] px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-30 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden w-10 h-10 border border-[#e5e7eb] rounded-xl flex items-center justify-center bg-white"
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
                className="w-10 h-10 rounded-xl object-cover border border-[#e5e7eb]"
              />
            )}

            <UserMenu />
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8 max-w-[1500px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;