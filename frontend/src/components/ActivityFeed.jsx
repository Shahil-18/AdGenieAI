function ActivityFeed() {
  const items = [
    "Generated 5 captions",
    "Created WhatsApp campaign",
    "Saved business profile",
    "Generated hashtag set",
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
      <h3 className="text-xl font-black">Recent Activity</h3>

      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span className="w-2 h-2 bg-violet-700 rounded-full" />
            <p className="text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;