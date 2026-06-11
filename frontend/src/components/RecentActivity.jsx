function RecentActivity({ campaigns = [] }) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6">
      <h3 className="font-black text-xl">Activity Timeline</h3>

      <div className="mt-6 space-y-5">
        {campaigns.length === 0 && (
          <p className="text-[#6b7280]">No activity yet.</p>
        )}

        {campaigns.slice(0, 6).map((item) => (
          <div key={item._id} className="flex gap-4">
            <div className="w-2 h-2 bg-[#111827] rounded-full mt-2" />

            <div>
              <p className="font-black capitalize">
                Generated {item.type}
              </p>
              <p className="text-sm text-[#6b7280]">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;