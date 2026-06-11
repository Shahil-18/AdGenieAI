function NotificationPanel() {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
      <h3 className="text-xl font-black">Notifications</h3>

      <div className="mt-5 bg-violet-50 border border-violet-100 rounded-2xl p-4">
        <p className="font-bold text-violet-800">Starter Plan Available Soon</p>
        <p className="text-violet-600 text-sm mt-1">
          Premium templates and analytics will unlock with subscription plans.
        </p>
      </div>
    </div>
  );
}

export default NotificationPanel;