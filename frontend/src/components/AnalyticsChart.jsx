import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

function AnalyticsChart({ analytics }) {
  const summaryData = [
    {
      name: "Captions",
      value: analytics.totalCaptions || 0,
    },
    {
      name: "Hashtags",
      value: analytics.totalHashtags || 0,
    },
    {
      name: "WhatsApp",
      value: analytics.totalWhatsApp || 0,
    },
    {
      name: "Posters",
      value: analytics.totalPosters || 0,
    },
  ];

  const trendData = [
    { day: "Mon", campaigns: 2 },
    { day: "Tue", campaigns: 4 },
    { day: "Wed", campaigns: 3 },
    { day: "Thu", campaigns: 7 },
    { day: "Fri", campaigns: analytics.totalCampaigns || 1 },
  ];

  return (
    <div className="grid xl:grid-cols-[1.4fr_0.9fr] gap-6">
      <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6">
        <div className="mb-6">
          <h2 className="text-xl font-black text-[#111827]">
            Campaign Activity
          </h2>
          <p className="text-sm text-[#6b7280] mt-1">
            Weekly campaign generation overview.
          </p>
        </div>

        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="campaigns"
                stroke="#111827"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6">
        <div className="mb-6">
          <h2 className="text-xl font-black text-[#111827]">
            Content Breakdown
          </h2>
          <p className="text-sm text-[#6b7280] mt-1">
            Campaigns created by type.
          </p>
        </div>

        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={summaryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="value" fill="#111827" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsChart;