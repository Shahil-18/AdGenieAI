import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl"
      >
        <div className="w-9 h-9 rounded-full bg-violet-700 text-white flex items-center justify-center">
          <User size={18} />
        </div>

        <div className="hidden md:block text-left">
          <p className="font-bold text-sm">{user?.name || "User"}</p>
          <p className="text-xs text-slate-500">{user?.plan || "free"} plan</p>
        </div>

        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-50">
          <div className="px-3 py-3 border-b border-slate-100">
            <p className="font-bold">{user?.name || "User"}</p>
            <p className="text-sm text-slate-500">{user?.email}</p>
          </div>

          <button
            onClick={() => navigate("/settings")}
            className="w-full text-left px-3 py-3 hover:bg-slate-100 rounded-xl"
          >
            Account Settings
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 text-red-600 px-3 py-3 hover:bg-red-50 rounded-xl"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;