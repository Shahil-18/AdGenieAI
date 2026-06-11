function UsageBanner({ used = 0, limit = 100 }) {
  const percent = Math.min((used / limit) * 100, 100);

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="font-black text-xl">Monthly Usage</h3>
          <p className="text-[#6b7280] mt-1">Campaign generation limit</p>
        </div>

        <p className="font-black">
          {used}/{limit}
        </p>
      </div>

      <div className="h-3 bg-[#f3f4f6] rounded-full mt-5">
        <div
          className="h-3 bg-[#111827] rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default UsageBanner;