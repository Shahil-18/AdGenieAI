import DashboardLayout from "../layouts/DashboardLayout";

function Settings() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-black">Settings</h1>
      <p className="text-slate-500 mt-2">Manage your account preferences.</p>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 mt-8 max-w-3xl">
        <div className="space-y-5">
          <input className="w-full bg-slate-100 p-4 rounded-xl" placeholder="Full Name" />
          <input className="w-full bg-slate-100 p-4 rounded-xl" placeholder="Email Address" />
          <input className="w-full bg-slate-100 p-4 rounded-xl" placeholder="Company Role" />

          <button className="bg-violet-700 text-white px-6 py-3 rounded-xl font-bold">
            Save Settings
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;