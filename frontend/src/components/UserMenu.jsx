import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, LogOut, Settings, ChevronDown } from "lucide-react";
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
        className="h-10 flex items-center gap-2 border border-[#e5e7eb] bg-white hover:bg-[#f9fafb] rounded-lg px-3"
      >
        <div className="w-7 h-7 rounded-md bg-[#0f1117] text-white flex items-center justify-center">
          <User size={15} />
        </div>

        <div className="hidden sm:block text-left">
          <p className="text-sm font-semibold leading-none">
            {user?.name || "User"}
          </p>
          <p className="text-xs text-[#6b7280] mt-1">
            {user?.plan || "free"} plan
          </p>
        </div>

        <ChevronDown size={15} className="text-[#6b7280]" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-[#e5e7eb] rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-2 z-50">
          <div className="px-3 py-3 border-b border-[#e5e7eb]">
            <p className="text-sm font-semibold">{user?.name || "User"}</p>
            <p className="text-xs text-[#6b7280] mt-1 truncate">
              {user?.email}
            </p>
          </div>

          <button
            onClick={() => navigate("/settings")}
            className="w-full flex items-center gap-2 text-sm px-3 py-2 rounded-md hover:bg-[#f9fafb] mt-2"
          >
            <Settings size={15} />
            Settings
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 text-sm px-3 py-2 rounded-md hover:bg-[#fef2f2] text-[#dc2626]"
          >
            <LogOut size={15} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;