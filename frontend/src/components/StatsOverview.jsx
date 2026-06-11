function StatsOverview({ analytics }) {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <StatCard title="Total Campaigns" value={analytics.totalCampaigns || 0} />
      <StatCard title="Captions" value={analytics.totalCaptions || 0} />
      <StatCard title="Hashtags" value={analytics.totalHashtags || 0} />
      <StatCard title="WhatsApp" value={analytics.totalWhatsApp || 0} />
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
      <p className="text-slate-500">{title}</p>
      <h2 className="text-4xl font-black mt-3">{value}</h2>
    </div>
  );
}

export default StatsOverview;