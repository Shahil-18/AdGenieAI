import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../api/authApi";
import UserTable from "../components/UserTable";
import MonthlyChart from "../components/MonthlyChart";
import { exportUsersCSV } from "../utils/csvExport";
import { Download } from "lucide-react";

function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    loadAdmin();
  }, []);

  const loadAdmin = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold text-[#6b7280] uppercase tracking-wider">
            Administration
          </p>

          <h1 className="text-4xl font-black mt-2">Admin Dashboard</h1>

          <p className="text-[#6b7280] mt-3">
            Monitor users, campaign activity and platform performance.
          </p>
        </div>

        <button
          onClick={() => exportUsersCSV(stats?.users || [])}
          className="bg-[#111827] text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2"
        >
          <Download size={18} />
          Export Users
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-5 mt-8">
        <Stat title="Total Users" value={stats?.totalUsers || 0} />
        <Stat title="Campaigns" value={stats?.totalCampaigns || 0} />
        <Stat title="Captions" value={stats?.captions || 0} />
        <Stat title="WhatsApp" value={stats?.whatsapp || 0} />
      </div>

      <div className="mt-8">
        <MonthlyChart stats={stats} />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-black mb-5">Registered Users</h2>
        <UserTable users={stats?.users || []} />
      </div>
    </DashboardLayout>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6">
      <p className="text-sm text-[#6b7280] font-semibold">{title}</p>
      <h2 className="text-4xl font-black mt-4">{value}</h2>
    </div>
  );
}

export default AdminDashboard;